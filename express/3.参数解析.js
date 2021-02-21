let express = require('express');
let app = express();
app.get('/', (req, res)=>{
    console.log(req)
    console.log(req.path)
    console.log(req.params)
    console.log(req.query)
    res.end()
})
// params为路径中已:冒号分隔的
app.get('/list/:id/:card', (req, res)=>{
    console.log(req)
    console.log(req.path)//  /list/:1/:001/
    console.log(req.params)//  { id: ':1', card: ':001' }
    console.log(req.query)//  { name: 'zf', age: '23' }
    res.end()
})
app.listen(8080);