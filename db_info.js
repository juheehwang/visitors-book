const express=require('express');
const router = express.Router();
var mysql=require('mysql');

let connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: secret,
    database: 'db_list'

});

module.exports=router;
