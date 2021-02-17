let http = require("http");
let fs = require("fs");
let path = require("path");
let pfs = fs.promises;
let server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, "./public/public.html"), (data) => {
    console.log(data);
  });
  //   fs.createWriteStream("./public/public.html").pipe(res);
});
// server.on("request", (req, res) => {
//   fs.readFile("public.html", (data) => {
//     console.log(data);
//     res.end(data);
//   });
//   // .then((data)=>{
//   //     res.end(data)
//   // }).catch((err)=>{
//   //     console.log(err)
//   // })
// });
server.listen(8080);
