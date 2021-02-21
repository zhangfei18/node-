let express = require('express');
let app = express();

// 指定渲染模板引擎
app.set('view engine', 'html');
// 设置放置模板的目录
app.set('views', __dirname);
// 自定义模板引擎
app.engine('html', require('ejs').__express)
app.get('/', function(req, res){
    res.render('1', {name: 'zf', age: '23'});
})  
app.listen(8080);