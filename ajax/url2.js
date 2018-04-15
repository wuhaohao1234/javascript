var http = require('http')
,urlLib = require('url')
,querystring = require('querystring')

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.url)
    var json = urlLib.parse(req.url,true).query;
    if(json['user'] == 'wu' && json['pass'] == '123'){
        res.write('ok')
    }
    res.end()
}).listen(8787)