const http = require('http')
const querystring = require('querystring')
http.createServer(function(req,res){
    var GET = {}
    console.log(req.url);
    if(req.url.indexOf('?') != -1){
        var arr = req.url.split('?')
        var url = arr[0];
        GET = querystring.parse(arr[1])
    }else{
        var url = req.url;
    }
    console.log(GET);
    res.write('aaa');
    res.end()
}).listen(8085)