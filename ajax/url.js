const urlLib = require('url')
var str = urlLib.parse('http://www.baidu.com/index.html?wu=123&pass=465465465',true)
console.log(str.query)