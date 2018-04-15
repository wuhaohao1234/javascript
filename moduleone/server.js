const http = require('http')
const urlLib = require('url')
const querystring = require('querystring')
var arr = {}
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    var json = urlLib.parse(req.url, true).query;
    if(arr[json.user]){
        res.write('用户已注册')
    }
    else{
        arr[json.user] = json.pass;
        res.write('注册成功')
    }
    res.end()
}).listen(8585)

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    var json = urlLib.parse(req.url, true).query;
    if (arr[json.user] == json.pass) {
        res.write('登录成功')
    }else{
        res.write('登录失败，请查看用户名或密码是否正确')
    }
    res.end()
}).listen(2872)