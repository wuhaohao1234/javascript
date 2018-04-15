var data = 'user=blue&pass=123'
var querystring = require('querystring')
console.log(querystring.parse(data))