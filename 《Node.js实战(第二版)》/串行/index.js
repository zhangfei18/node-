const fs = require("fs");
const request = require("request");
const htmlParser = require("htmlparser");
const { nextTick } = require("process");
const configFileName = "./rss_feeds.txt";

function checkForRSSFile(filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      next(new Error(`missing ${filePath}`));
    }
    next(null, filePath);
  });
}
function readRSSFile(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) return next(err);
    data = data
      .toString()
      .replace(/^\s+|\s+$/, "")
      .split(/\n/);
    let random = Math.floor(Math.random() * data.length);
    next(null, data[random]);
  });
}
function downloadRSSFeed(url) {
  request({ uri: url }, (err, res, body) => {
    if (err) return next(err);
    if (res.statusCode !== 200) {
      return next(new Error(res.statusCode));
    }
    next(null, body);
  });
}
function parseRSSFeed(body) {
  const handler = new htmlParser.RssHandler();
  const parser = new htmlParser.Parser(handler);
  parser.parseComplete(body);
  if (!handler.dom.length) {
    return next(new Error("No Rss Items"));
  }
  const item = handler.dom.shift();
  console.log(item.title);
  console.log(item.link);
}
const stack = [checkForRSSFile, readRSSFile, downloadRSSFeed, parseRSSFeed];
function next(err, result){
    if(err) throw err;
    const curTask = stack.shift();
    curTask ? curTask(result) : null;
}
next(null, configFileName)