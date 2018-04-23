function startMov(obj, json, fn) {//fn回调函数
    clearInterval(obj.timer);//执行动画之前清除动画
    var flag = true;//是否动画都完成了
    obj.timer = setInterval(function () {
        for (var attr in json) {
            var icur = 0;
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);//转换成整数,并且四舍五入下
                //计算机在计算小数的时候往往是不准确的！
            }
            else {
                icur = parseInt(getStyle(obj, attr));
            }
            var speed = 0;
            speed = (json[attr] - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur != json[attr]) {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (icur + speed) + ')';
                obj.style.opacity = (icur + speed) / 100;
            }
            else {
                obj.style[attr] = icur + speed + 'px';
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }
    }, 30);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}