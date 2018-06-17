const superagent = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')

const mainUrl = 'http://www.sxfu.org'  //填入爬虫网址

let url = ''    
var speed = ''
let reg = /"([\s\S]*?)"/g
let regCss = /\.css/
let regJs = /\.js/
let regPng = /\.png/
let regJpg = /\.jpg/
superagent.get(mainUrl + url).end(function (err, res) {

    if (err) {
        return
        throw Error(err)
    }
    // 将请求主页写入demo.html里
    fs.writeFile('./index.html',res.text,function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log('ok')
        }
    })
    // 分析res.text里面所有的数据
    var arr = res.text.match(reg)
    for(var i = 0;i < arr.length;i ++){
        // 分析数据类型，并输入保存地址，向服务器再发生请求
        if(arr[i].match(regCss)){
            getState('./css/',arr[i])
        }else if(arr[i].match(regJs)){
            getState('./js/',arr[i])
        }else if(arr[i].match(regPng)){
            getState('./img/',arr[i])
        }else if(arr[i].match(regJpg)){
            getState('./img/',arr[i])
        }   
    }

})

function getState(files,url) {
    var file = url
    var url = (mainUrl + url).replace("\"","")
    url = url.replace("\"","")
    superagent.get(url).end(function (err, res) {
        if (err) {
            return
        }else{
            // 处理地址
            speed = file.replace(/\//g,'');
            file =  (files + speed).replace('"','')
            file = file.replace('"','')

            if(files === './img/'){
                fs.writeFile(file,res.body,function(err,data){
                    if(err){
                        console.log('err')
                    }else{
                        console.log('yes 得到图片')            
                    }
                })
            }else if(files === './css/'){
                fs.writeFile(file,res.text,function(err,data){
                    if(err){
                        console.log('err')
                    }else{
                        console.log('yes 得到css')            
                    }
                })
            }else if(files === './js/'){
                console.log('这里暂时无法得到数据')
            }
            
        }
    })
}


// 基于node爬虫，html文件css文件，图片文件暂时不存在问题，js文件暂时无法请求

// 如需使用请先下载superagent与cheerio