const express=require('express');
const router = express.Router();
const fs=require('fs');
const ejs = require('ejs')
var db=require('./connection');
db.connect();

//db 내용 저장하기 1
router.get('/',(req,res)=>{
   res.render('./views/intro')
})
router.get('/views/intro',(req,res)=>{
    res.render('./views/intro')
})
//db 내용 저장하기 2
router.post('/create',(req,res,next)=>{
    let body = req.body;

     db.query("INSERT INTO db_list.visitor (name, date, content) VALUES (?,?,?)",[
        body.name, body.date, body.content],
        ()=>{
            res.redirect("/create");
        });
});
//db 저장내용 가저오기
router.get('/create',(req,res)=>{
    fs.readFile('./views/list.ejs','utf8',(err,data)=>{
        db.query('SELECT * FROM db_list.visitor',(err,results)=>{
        if(err){
            res.send(err)
        }else{
            res.send(ejs.render(data,{
                data: results
            }))
        }
    })
})
})
//삭제(delete)코드
router.get('/delete/:ID',(req,res)=>{
    db.query('DELETE FROM db_list.visitor WHERE ID=?',[req.params.ID],(err,results,fields)=>{
        // db.release();
        
       if(err)
       return console.error(error.message);

       console.log('Deleted Row(s):',results.affectedRows);
        res.redirect('/create')
    })
})
//수정(edit)코드
router.get('/edit/:ID',(req,res)=>{
    fs.readFile('./views/edit.ejs','utf8',(err,data)=>{
        db.query('select * from db_list.visitor where ID=?',[req.params.ID],(err,result)=>{
            res.send(ejs.render(data,{
                data: result[0]
            }))
        })
    })
})
router.post('/edit/:ID',(req,res)=>{
    const body=req.body

    db.query('update db_list.visitor SET name=?, date=?, content=? where ID=?',[
        body.name, body.date, body.content, req.params.ID],()=>{
            res.redirect('/create')
        })
    
})
module.exports=router;
