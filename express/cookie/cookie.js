const express = require('express')
const bodyParser = require('body-parser')
const static = require('express-static')
const cookieParser = require('cookie-parser')
var server = express()

server.use(cookieParser())
server.use('/aaa/a.html',function(req,res,next){
    res.cookie('pass','123456',{
        path : '/aaa',
        maxAge : 11111111111
    })
    console.log(req.cookies)
    res.send('ok')
})
// server.use(static('./www'))
server.listen(8585)