const fs = require('fs');
// fs.readFile(文件名,回掉函数)
// fs.writeFile()
// 异步操作：多个操作可以同时执行
// 同步操作：一次执行一个操作
fs.readFile('aaa.txt',function(err,data){
    if(err) {
        console.log('读取失败')
    }else{
        console.log(data.toString())
    }
})
fs.writeFile('bbb.txt','写入文件',function(){

})