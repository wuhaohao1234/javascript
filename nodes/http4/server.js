const http = require('http')
const querystring = require('querystring')
http.createServer(function(req,res){
    var i = 0;
    var str = ''
    req.on('data',function(data){
        // 如果数据量非常大，则分几次接收
        console.log('第' + i + '次收到');
        str += data;
        i ++;
    })
    req.on('end',function(){
        var POST = querystring.parse(str)
       console.log(POST);
    })
    res.end()
}).listen(8909)