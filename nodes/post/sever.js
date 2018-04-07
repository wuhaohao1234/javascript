const http = require('http');
http.createServer(function(req,res){
    //post数据:req
    var str = '';
    console.log(str);
    // data:有一段数据到达(很多次)
    req.on('data',function(data){
        
        str += data;
    });
    // end  数据全部到达(一次)
    req.on('end',function(){
        console.log(str);
    })
    res.end()
}).listen(8976)