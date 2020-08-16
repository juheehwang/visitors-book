const express=require('express');
const router = express.Router();
var mysql=require('mysql');

let connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '8022',
    database: 'db_list'

});

module.exports=router;
