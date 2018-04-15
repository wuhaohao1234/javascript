const express = require('express')
const static = require('express-static')
const cookieParser = require('cookie-parser')

const server = express()

server.use(cookieParser())

server.use('', function (req, res, next) {
    console.log(req.cookies)
    res.send('ok')
})

server.listen(8989)

server.use(static('./www'))