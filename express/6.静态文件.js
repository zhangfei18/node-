let express = require("express");
let fs = require("fs");
let path = require("path");
let app = express();

/**
 * app.use(path, [options])
 * path 默认是/， 即当访问path后面直接加资源文件名字时，会直接去public文件下查找
 */
app.use(express.static(require("path").join(__dirname, "public"), {}));
// app.use( '/public', express.static('public'));// 手动设置path
// 原理
// app.use(function (req, res, next) {
//   let rs = fs.createReadStream(path.join(__dirname, "public", req.path));
//   rs.on("error", () => {
//     next();
//   });
//   rs.pipe(res);
// });
app.set("view engine", "html");
app.set("views", __dirname);
app.engine("html", require("ejs").__express);
app.get("/", function (req, res) {
  res.render("1", { name: "zf", age: 23 });
  let rs = require("fs").createReadStream("1.html");
  rs.pipe(res);
});
app.listen(8080);
