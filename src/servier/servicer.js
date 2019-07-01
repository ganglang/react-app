const express=require('express');
let app=express();

app.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //res.header("Access-Control-Allow-Credentials","true");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Content-Type", "text/html;charset=UTF-8");
    next();
});
let sliders=require('./data/slider');
app.get('/slider',function (req,res) {
    res.send(sliders);
})

let newsList=require('./data/newsList');
app.get('/news',(req,res)=>{
    res.json(newsList);
})

app.listen(8080);

module.exports=app;