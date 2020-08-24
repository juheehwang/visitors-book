const express=require('express');
var app = express();
const bodyParser = require('body-parser');
const router = require('./router/router');
// var mysqlDB=require('./router/connection');
var mysql=require('mysql2');

app.set('view engine', 'ejs');
app.set('views',__dirname,'./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('',router);

app.listen(3003, ()=>{
    console.log("sever starting with 3003")
})