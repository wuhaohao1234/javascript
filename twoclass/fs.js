var http = require('http')
var fs = require('fs')
var urlLib = require('url')

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(req.url == '/index.html'){
        fs.readFile('.'+ req.url,function(err,data){
            if(err){
                res.write(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else{
        fs.readFile('./moon.html',function(err,data){
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }
}).listen(8787)