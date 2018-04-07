const express = require('express')
var server = express();
server.listen(8085)
//GET
server.use('/',function(req,res){
    console.log(req.query)
})
//POST
