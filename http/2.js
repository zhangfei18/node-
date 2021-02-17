let http = require("http"); //专门用来起服务的内置模块
//创建服务: 当有人访问这个服务的时候，会触发这个回调函数
let server = http.createServer((req, res) => {
  /**
   * req: 请求相关的信息
   *    .url: 请求URL
   *    .method: 请求方法 
   *
   * res: 响应相关的信息
   */
  res.end("🐂");
});
// server.on('request',(req, res)=>{})
let port = 8080;
server.listen(port, () => {
  //服务启动成功之后，会触发当前这个回调函数
  console.log("服务：", port);
});
// 防止启动多次的时候，使用同一个端口会报错
server.on("error", (error) => {
  if (error.errno === "EADDRINUSE") {
    server.listen(++port);
  }
});

//笔记：
// 后端的热更新
// npm install -g nodemon
// nodemon ./server.js
