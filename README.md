##### 问题一：
如果后台和cmd都一直报有个module没有build或找不到，但安装了相应模块还是报错，百度上也找不到相应的解决方案，则可以把node_modules文件夹删除，再npm install试试。
#####问题二：用express写的本地接口无法访问
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


