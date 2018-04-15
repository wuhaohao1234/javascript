const express = require('express')
const bodyParser = require('body-parser')
const static = require('express-static')
const cookieParser = require('cookie-parser')
var server = express()

server.use(cookieParser())
server.use('', function (req, res, next) {
    res.cookie('pass', '123456')
    res.cookie('password','fsdlkfj')
    console.log(req.cookies)
    // res.send('ok')
    next()
})

server.use('/leo',function(req,res,next){
    res.send({
        user : req.cookies.user,
        pass : req.cookies.pass
    })
})

server.use(static('./www'))
server.listen(8585)