const express=require('express');
let app=express();

app.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    if(res.method==="OPTIONS"){res.send(200);}else{next();}
});
let sliders=require('./data/slider');
app.get('/slider',function (req,res) {
    res.json(sliders);
})

let newsList=require('./data/newsList');
app.get('/news',(req,res)=>{
    res.json(newsList);
})

app.listen(8080);

module.exports=app;