const http = require("http");
/**
 *
 *
 * @param {请求} request
 * @param {响应} response
 */
function server(request, response) {
    console.log(request.method); //请求的方法
    console.log(request.url); //请求的方法
    console.log(request.headers); //请求的头部
    response.statusCode = 200; //设置状态码
    response.setHeader("name", "zf"); //
    //设置响应类型、状态码
    response.setHeader("Content_type", "text/html;charset=utf-8");
    //写入数据
    response.write(new Date().toString());
    //结束
    response.end();
}
let app = http.createServer(server);
app.listen(3000, 'localhost');