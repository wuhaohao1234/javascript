const querysting = require('querystring')
exports.urlencoded = function() {
    return function(req,res,next) {
        var str = ''
        req.on('data',function(data){
            str += data;
        })
        req.on('end',function(){
            req.body = querysting.parse(str)
            next()
        })
    }
}