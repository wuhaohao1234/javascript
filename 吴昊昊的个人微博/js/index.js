var summary = document.getElementsByClassName('summary')[0]
register = summary.getElementsByTagName('button')[0]
logins = summary.getElementsByTagName('button')[1]
skip = summary.getElementsByTagName('button')[2]
loginZc = document.getElementsByClassName('login_zc')[0]
summary.onclick = function (ev) {
    var ev = ev || window.event
    var target = ev.target || ev.srcElement
    if (target.nodeName.toLowerCase() == 'button') {
        startMov(summary, { opacity: 0 });
        summary.dispaly = 'none';
        startMov(loginZc, { top: 200 });
    　　}
}
