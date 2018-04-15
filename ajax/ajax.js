function ajax(option) {
    var ajax = new XMLHttpRequest()
    if(option.type == 'get'){
        ajax.open('get', option.url + '?' + JsonToString(option.data), true)
        ajax.send()
    }else{
        ajax.open('post', option.url, true)
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        ajax.send(JsonToString(option.data))
    }
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300 || ajax.status == 304) {
                option.success(ajax.responseText)
            } else {
                option.error()
            }
        }
    }
}
function JsonToString(json) {
    var arr = []
    for (var i in json) {
        arr.push(i + '=' + json[i])
    }
    return arr.join('&')
}