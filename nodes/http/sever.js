const http = require('http');const querystring = require('querystring')
const urlLib = require('url');
http.createServer(function(req,res){
    var obj = urlLib.parse(req.url,true)
    var url = obj.pathname;
    var GET = obj.query;
    console.log(url,GET);
    res.write('aaa');
    res.end();
}).listen(2022)