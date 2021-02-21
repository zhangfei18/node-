let express = require('express');
let app = express();
app.get('/list', (req, res)=>{
    // send对象将被转换为json
    res.send({'name': 'zf', 'age': '23'});
})
app.get('/list2', (req, res)=>{
    // send字符串时， Content-Type默认设置为'text/html'
    res.send('list2');
})
app.get('/status', function(req, res){
    // 返回状态码
    res.sendStatus(200);
})
app.listen(8080);