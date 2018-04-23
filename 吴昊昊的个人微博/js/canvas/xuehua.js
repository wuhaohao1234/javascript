canvas("start", 230, 1000, 60, 2, 50000, 0.5);
var login = document.getElementsByClassName('login')[0],
    canvas = login.getElementsByTagName('canvas')[0],
    w,
    h,
    canCon,
    x = 100,
    img = login.getElementsByTagName('img')[0]
y = 0,
    moon = login.getElementsByTagName('img')[2],
    statr = document.getElementsByClassName('statr')[0]
setInterval(function () {
    if (moon.style.opacity == 0.8) {
        moon.style.opacity = 1
    } else {
        moon.style.opacity = 0.8
    }
}, 2000)
img.onload = function () {
    (function setSize() {
        window.onresize = arguments.callee
        w = window.innerWidth
        h = window.innerHeight
        canvas.width = w
        canvas.height = h
    })()

    canCon = canvas.getContext('2d')
    var aRain = []
    function Rain() {

    }
    function random(min, max) {
        return Math.random() * (max - min) + min
    }
    Rain.prototype = {
        init: function () {
            this.x = random(0, w)
            this.y = 0
            this.vY = random(1, 3)
            this.h = random(0.8 * h, 0.9 * h)
            this.vx = random(5, 19)
            this.vV = random(0.05, 0.1)
            this.opa = random(0.5, 1)
            this.vopa = random(0.2, 0.3)
            this.fh = random(0, 300)
        },
        draw: function () {
            if (this.y < this.h) {
                canCon.globalAlpha = this.opa
                canCon.beginPath()
                canCon.fillStyle = '#31f7f7'
                canCon.drawImage(img, this.x, this.y, this.vx, this.vx)

                // canCon.font('3px Arial')
                // canCon.fillText('*',this.x,this.fh)

            }
        },
        move: function () {
            if (this.y < this.h) {
                this.y += this.vY;
                this.vx += this.vV;
                this.opa += this.vopa;
            } else {
                this.init()
            }
            this.draw()
        }
    }
    function createRain(num) {
        for (var i = 0; i < num; i++) {
            setTimeout(function () {
                var rain = new Rain()
                rain.init()
                rain.draw()
                aRain.push(rain)
            }, 200 * i)
        }
    }
    createRain(30)
    setInterval(function () {
        canCon.fillStyle = 'rgba(0,0,0,1)'
        canCon.fillRect(0, 0, w, h)
        for (var item of aRain) {
            item.move()
        }
    }, 30)
}