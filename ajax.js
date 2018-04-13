function ajax(option) {
    var ajax = new XMLHttpRequest()
    ajax.open(option.type, option.url + '?' + JsonToString(option.data), true)
    ajax.send()
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