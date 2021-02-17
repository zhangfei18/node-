const http = require('http');
const fs = require('fs');
const mime = require('mime');
console.log(mime.getType, 'mime')

function server(request, response) {
    const url = request.url;
    // console.log(url)
    if (url === '/') {
        response.setHeader('Content-Type', 'text/html;charset:utf-8');
        fs.readFile('index.html', (err, data) => {
            if (!err) {
                response.write(data);
                response.end();
            }
        })
    } else {
        response.setHeader('Content-Type', mime.getType(url) + ';charset:utf-8');
        fs.readFile(url.slice(1), (err, data) => {
            if (!err) {
                response.write(data);
                response.end();
            }
        })
    }
}
let app = http.createServer(server);
app.listen(3001)