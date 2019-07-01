##### 问题一：
如果后台和cmd都一直报有个module没有build或找不到，但安装了相应模块还是报错，百度上也找不到相应的解决方案，则可以把node_modules文件夹删除，再npm install试试。
##### 问题二：用express写的本地接口无法访问
解决方案：用express写的本地接口无法访问，是因为npm start没启动起本地接口服务
第一步:修改express写的本地接口文件server.js，加上导出生成的express服务
```$xslt
    const express=require('express');
    let app=express();
    
    app.all('*',function (req,res,next) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-
    With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Credentials","true");
        if(res.method==="OPTIONS"){res.send(200);}else{next();}
    });
    let sliders=require('./swiper');
    app.get('/slider',function (req,res) {
        //res.json(sliders);
        res.send(sliders);
    })
    
    app.listen(8080);
    
    module.exports=app; //这步很重要，要导出，然后在启动文件里引入，原先是没写的
```
第二步：
找到启动文件，在package.json的“start”选项下可以找到启动文件为start.js
在start.js里引入一下这个代码，然后重新启动项目 即npm start即可：
```$xslt
const server=require("../src/servier/servicer");
```
##### 问题三：
后台报错：
Access to fetch at 'http://localhost:8080/slider' from origin 'http://localhost:3000' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
解决方法：
fetch的get请求（/src/servier/fetchApi.js文件里)去掉总是给请求发送cookie的设置，即去掉"credentials:'include'".

####  react-swipe :https://github.com/voronianski/react-swipe



