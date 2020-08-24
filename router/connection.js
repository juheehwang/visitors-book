var mysql      = require('mysql2');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : secret,
  database : 'db_list'
});
 
module.exports=db
// db.connect();

// db.query('SELECT * FROM db_list.visitor', function (error, results, fields) {
//   if (error){
//       console.log(err);
//   } 
//   console.log(results);
// });
 
// db.end();