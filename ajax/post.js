var http = require('http')
var querystring = require('querystring')
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    var str = ''
    req.on('data',function(data){
        str += data;
    })
    req.on('end',function(){
        var json = querystring.parse(str)
        if(json['user'] == 'wu' && json['pass'] == '123'){
            res.write('ok')
        }
        res.write('no')
    })
}).listen(8085)