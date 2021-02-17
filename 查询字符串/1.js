const http = require('http');
const fs = require('fs');
const url = require('url');


function server(request, response) {
    let reqUrl = request.url;
    //true表示将查询字符串转化为对象
    let queryObj = url.parse(reqUrl, true)
    console.log(queryObj)
    response.write('哈哈哈');
    response.end()
}
const app = http.createServer(server)
app.listen(3002);