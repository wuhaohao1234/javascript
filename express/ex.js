const express = require('express')
const bodyParser = require('body-parser')
const static = require('express-static')

const server = express()  //创建服务器
server.listen(8787)     //监听

//server.use(bodyParser.urlencoded({}))

server.use('./leo',function(req,res){
    //res.setHeader('Access-Control-Allow-Origin','*')
    //console.log(req.body)
    res.send('haha')
})

server.use(static('./www'))

