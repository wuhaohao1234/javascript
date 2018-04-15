const express = require('express')
const static = require('express-static')

const server = express()

server.use('',function(req,res,next){
    res.cookie('path','123',{
        path : 'ccc'
    })
    res.send('ok')
})

server.listen(8989)

server.use(static('./www'))