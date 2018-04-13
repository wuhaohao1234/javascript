const http = require('http')

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    // console.log('访问')
    var url = req.url
    if(url.indexOf('html') != -1){
        console.log(url)
        if(url === '/index.html'){
            res.write('good index.html')
        }else{
            res.write('404')
        }
    }else{
        res.write('404')
    }
    res.write('node.js')
    res.end()
}).listen(8087)