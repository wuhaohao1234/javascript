const http = require('http')
const urlLib = require('url')
const fs = require('fs')

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    var json = urlLib.parse(req.url,true).query;
    fs.writeFile(json.file,json.inner,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log('ok')
        }
    })
}).listen(8888)