const fs = require("fs");
const path = require("path");
const events = require("events");

class Watcher extends events.EventEmitter {
  constructor(watchDir, processedDir) {
    super();
    this.watchDir = watchDir;
    this.processedDir = processedDir;
  }
  watch() {
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err;
      //   对其下的每个问价夹都进行监听
      for (let index in files) {
        console.log(files[index]);
        this.emit("process", files[index]);
      }
    });
  }
  start() {
    fs.watchFile(this.watchDir, () => {
      this.watch();
    });
  }
}
let watcherDir = __dirname;
let processedDir = path.join(__dirname, "/copy");
console.log(watcherDir, processedDir);
const watcher = new Watcher(watcherDir, processedDir);
watcher.on("process", (file) => {
  const watchFile = `${watcherDir}/${file}`;
  const processedFile = `${processedDir}/${file.toLowerCase()}`;
  fs.rename(watchFile, processedFile, (err) => {
    if (err) throw err;
  });
});
watcher.start();
