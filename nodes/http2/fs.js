const fs = require('fs');
fs.readFile('aaa.txt',function(err,data){
    if(err){
        console.log('读取失败')
    }else{
        console.log(data.toString());
    }
})
fs.writeFile('bbb.txt','写入文件',function(err){
    console.log(err);
})