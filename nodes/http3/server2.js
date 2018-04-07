const http = require('http')
const urlLib = require('url')
http.createServer(function(req,res){
    var obj = urlLib.parse(req.url,true)
    var url = obj.pathname;
    var GET = obj.query;
    console.log(url,GET)
    res.write('再一次运行')
    res.end();
}).listen(8085)