const express=require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Visitor = require('./models/visitors');
var bodyParser=require('body-parser');
const { request } = require('express');


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
//connect to mongodb
const dbURI='mongodb+srv://juheeh:8022@jhjavascript.88ln5.mongodb.net/nodeEX?retryWrites=true&w=majority'
mongoose.connect(dbURI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true })
     .then((result)=>app.listen(3030))
     .catch((err)=>console.log(err));

app.set('view engine','ejs');

app.use(morgan('dev'));
app.use (bodyParser());
app.use(express.static(__dirname + "views"));


app.get('/',(req,res) => {

    res.render('test1',{title:'intro'});
});


app.get('/test2',(req,res) => {
    res.render('test2',{title:'main'});
})

app.post("/visitor",(req,res)=>{
     res.send(req.body.name);
    // const user = new Visitor(req.body)

    //  user.save((err,userInfo)=>{
    //      if(err) return res.json({sucess:false,err})
    //      return res.status(200).json({
    //          success:true

    //      })
         
    // })
    // res.end(JSON.stringify(req.body));
})
