var fs = require('fs')

fs.writeFile('aaa.txt','aaa',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log('写入成功')
    }
})