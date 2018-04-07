/*
用户登录:
*/
const http = require('http')
const fs = require('fs')
const urlLib = require('url')
const querystring = require('querystring')

var user = {};

var server = http.createServer(function(req,res){
    var str = ''
    req.on('data',function(data){
        str += data;
    })
    req.on('end',function(){
        var obj = urlLib.parse(req.url,true)
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
    })
    var file_name = './www' + url;
    // 读取文件
    if(url == '/user'){
        switch(GET.act) {
            case 'reg' :
                if(user[GET.user]){
                    res.write(`{'ok' : false,'msg' : '用户已存在'}`)
                }else{
                    user[GET.user] = GET.pass;
                    res.write(`{'ok' : true, 'msg' : '注册成功'}`)
                }
                break;
            case 'lgoin' :
                if (user[GET.name] == null) {
                    res.write(`{'ok' : false,'msg' : '用户已注册'}`)
                }else if(user[GET.user] != GET.pass){
                    res.write(`{'ok' : false,'msg' : '密码有误'}`)
                }else{
                    res.write(`{'ok' : true, 'msg' : '登陆成功'}`)
                }
                break;
            default :
            res.write(`{'ok' : false,'msg' : '未知的act'}`)
            res.end()
        }
    }else{
        fs.readFile(file_name, function (err, data) {
            if (err) {
                res.write('404')
            } else {
                res.write(data)
            }
        })
    }

}).listen(8085)