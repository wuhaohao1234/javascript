const http = require('http');
const fs = require('fs');
const urlLib = require('url');
const querystring = require('querystring')

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    var json = urlLib.parse(req.url,true).query;
    fs.readFile('./账号密码.txt','utf8',function(err,data){
        if(err){
            console.log(err)
        }else{
            var arr = eval('('+data+')')
            if(arr[json.user]){
                res.write('用户名已存在')
                res.end()
            }else{
                arr[json.user] = json.pass;
                fs.writeFile('./账号密码.txt',JSON.stringify(arr),function(err,data){
                    if(err){
                        console.log(err)
                    }else{
                        res.write('成功注册')
                        res.end()
                    }
                })
            }
        }
    })
}).listen(8585)


http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    var json = urlLib.parse(req.url, true).query;
    fs.readFile('./账号密码.txt','utf8',function(err,data){
        if(err){
            console.log(err)
        }else{
            var jsonDate = eval('('+data+')');
            console.log(jsonDate[json.user])
            console.log(json.pass)
            if(jsonDate[json.user] == json.pass){
                res.write('登录成功')

            }else{
                res.write('登录失败, 用户名或密码错误')
            }
            res.end()
        }
    })
}).listen(8787)

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    var json = urlLib.parse(req.url, true).query;
    res.write(json)
    res.end()
}).listen(9999)