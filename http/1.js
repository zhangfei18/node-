let http = require("http"); //专门用来起服务的内置模块
let server = http.createServer((req, res) => {
    /**
     * req: 请求相关的信息
     *  
     * res: 响应相关的信息
     */
    res.end('🐂')
}); //创建服务: 当有人访问这个服务的时候，会触发这个回调函数
// server.on('request',(req, res)=>{})
server.listen(8080, ()=>{
    //服务启动成功之后，会触发当前这个回调函数
    console.log('服务：8080')
});

// 后端的热更新
// npm install -g nodemon
// nodemon ./server.js