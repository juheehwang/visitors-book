const express=require('express');
var app = express();
const bodyParser = require('body-parser');
const router = require('./db_info');

app.set('view engine', 'ejs');
app.set('views',__dirname,'./views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




app.get('/',(req,res)=>{
    res.render('./views/list')
})

app.get('/intro',(req,res)=>{
    res.render('./views/intro')
})

// app.post('/intro',(req,res)=>{
   
//     var item={
//         name:req.body.name,
//         date:req.body.date,
//         content:req.body.content
//     };
//     console.log(item);
//     res.json({item});
// });

router.get('/create',(req,res,next)=>{
    client.query("SELECT * FROM db_list.visitor;",(err,result,fields)=>{
        if(err){
            console.log(err);
            console.log("쿼리문에 오류가 있습니다,");
        }
        else{
            res.render('./list',{
                results:result
            });
        }
    });
})

router.post('/create',(req,res,next)=>{
    let body = req.body;

    client.query("INSERT INTO visitor (name, date, content) VALUES (?,?,?)",[
        body.name, body.date, body.content],
        ()=>{
            res.redirect("/create");
        });

});
    


app.listen(3003, ()=>{
 console.log("sever starting with 3003")
})