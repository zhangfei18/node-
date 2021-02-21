// .use()
let express = require('express');
let app = express();
// 特点每个中间件都可以通过next方法来控制是否向下继续执行
// 如果中途出错了， 转交错误中间件处理

app.use(function(req, res, next){
    console.log('中央')
    req.money = 100;
    next()
})
app.use(function(req, res, next){
    console.log('省')
    req.money = 80;
    next('省部贪污')
})
app.use(function(req, res, next){
    console.log('村')
    req.money = 10;
    next()
})
app.use(function(err,req, res, next){
    console.log('出错', err)
    next()
})
app.get('*', (req, res)=>{
    console.log('农民:', req.money)
    res.end()
})
app.listen(8080)