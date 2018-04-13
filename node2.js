var http = require('http')
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    var url = req.url.substring(2)
    var arr = []
    var arr = url.split('&');
    var json = {}
    for(var i = 0;i < arr.length;i ++){
        json[arr[i].split('=')[0]] = arr[i].split('=')[1]
    }
    console.log(json)
    if(json['user'] == 'wu' && json['pass'] == '123'){
        res.write('登录成功')
    }else{
        res.write('登录失败')
    }
    res.end()
}).listen(8087)