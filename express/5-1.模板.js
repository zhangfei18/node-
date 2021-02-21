/**
 * npm install ejs
 *
 */
var express = require('express');

var app = express();

app.set('view engine','ejs');
app.set('views',__dirname);
app.get('/',function(req,res){
 res.render('1',{
     name:'zfpx',
     age:6
 });
});
app.listen(8080);