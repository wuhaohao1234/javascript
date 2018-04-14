const express = require('express')
const bodyParser = require('./bodyparser')
const server = express()  //创建服务器

server.listen(8787)     //监听

server.use(bodyParser.urlencoded())

server.use('', function (req, res) {
    console.log(req.body)
})