const http = require('http');
const fs = require('fs');
var sever = http.createServer(function(req,res){
    var name = './www' + req.url;
    fs.readFile(name,function(err,data){
        if(err){
            res.write('读取失败');
        }else{
            res.write(data);
        }
        res.end();
    })
})
sever.listen(8990);