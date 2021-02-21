let express = require("express");
const { nextTick } = require("process");
let app = express();

app.use("/", (req, res, next) => {
  console.log(req.path);
  if (req.path !== "/") {
    next();
  } else {
    // next()
  }
});
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("飞哥加油！！！");
});
app.get("/list", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("计划列表");
});
app.all("*", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("页面飞走了");
});
app.listen(8080);
