var mysql      = require('mysql2');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : secret,
  database : 'db_list'
});
 
module.exports=db
