const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');
var sever = http.createServer(function(req,res){
    //get
    var obj = urlLib.parse(req.url,true);
    var urls = obj.pathname;
    const GET = obj.query;
    //post
    var str = ''
    req.on('data',function(data){
        str += data;
    })
    req.on('end',function(){
        const POST = querystring.parse(str);
        console.log(urls,GET,POST);
    })
    res.end()
    //文件请求
})
sever.listen(9080);