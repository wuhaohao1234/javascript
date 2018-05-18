# 吴昊的jquery

* 
    (function (window, undefined) {
    var jQuery = function (selector) {
        return new jQuery.prototype.init(selector)
    }
    jQuery.prototype = {
        constructor: jQuery,
        
        init: function (selector) {  //初始化
            // 去除字符串两端的空格，得到一个没有空格的字符串
            selector = jQuery.trim(selector)
            // 判断selector是否是undefined或null
            if (!selector) {
                // 字符串处理
            } else if (jQuery.isString(selector)) {
                // 判断是否是代码片段
                if (jQuery.isHTML(selector)) {
                    // 根据代码片段创建元素,将创建好的一级元素添加到jquery中,给jquery对象添加length属性,返回加工好的this
                    var temp = document.createElement('div')
                    temp.innerHTML = selector
                    // for(var i = 0;i < temp.children.length;i ++){
                    //     this[i] = temp.children[i]   //把该标签挂载到jquery
                    // }
                    // this.length = temp.children.length
                    var arr = []
                    arr.push.apply(this, temp.children)  //不知道为何[]不好使,只能搞一个arr数组,把里面的标签用push方法到jquery
                    // 查询dom
                } else {
                    var res = document.querySelectorAll(selector)   //如果不是数组，用查询节点的方法查询
                    var arr = []
                    arr.push.apply(this, res)           //还是挂载到jquery上面
                    return this
                }
                // 数组处理
            } else if (jQuery.isArray(selector)) {
                var arr = []
                // 把真数组转成伪数组放入$
                var arr2 = arr.slice.call(selector)
                // 将自定义的伪数组转换成真数组
                arr.push.apply(this, selector)
            } else if (jQuery.isFunction(selector)) {
                jQuery.ready(selector)              //对应下面的jquery.ready方法
            }
            else {
                this[0] = selector;
                this.length = 1;
            }
            return this;
        },
        jquery : '吴昊的jquery',
        selector : '',
        length : 0,
        push : [].push,
        sort : [].sort,
        splice : [].splice,
        toArray : function () {                 //得到字符串
            return [].slice.call(this)
        },
        get : function (num) {                  
            if(arguments.length == 0){
                return this.toArray()           //得到jquery对象
            }else if(num >= 0){
                return this[num]                //得到对应的node
            }else{
                return this[this.length + num]
            }
        },
        eq : function (num) {
            if (arguments.length === 0) {
                return new jQuery()
            }else{
                return jQuery(this.get(num))
            }
        },
        first : function() {
            return this.eq(0)
        },
        last : function () {
            return this.eq(-1)
        },
        each : function(fn) {
            return jQuery.each(this,fn)
        }
    }
    jQuery.extend = jQuery.prototype.extend = function (obj) {
        for (var key in obj) {
            this[key] = obj[key]        //this指向jquery，jquery.key = value   这样做的 好处是避免方法冲突，可维护
        }
    }
    jQuery.extend({
        isString: function (str) {
            return typeof str == 'string'
        },
        isHTML: function (str) {    //判断是否是标签
            return str.charAt(0) == '<' && str.charAt(str.length - 1) == '>' && str.length >= 3
        },
        trim: function (str) {
            if (!jQuery.isString(str)) {
                return str
            }
            if (str.trim) {
                return str.trim()
            } else {
                return str.replace(/^\s+|\s$/g, '')
            }
        },
        isObject: function (selector) {
            return typeof selector === 'object'
        },
        isWindow: function (selector) {
            return selector === 'window'
        },
        isArray: function (selector) {
            if (jQuery.isObject(selector) && !jQuery.isWindow(selector) && 'length' in selector && selector.push) {
                return true
            } else {
                return false
            }
        },
        isFunction : function (selector) {
            return typeof selector === 'function'
        },
        ready : function(fn) {
            if(document.readyState == 'complete'){
                fn()
            }
            else if (document.addEventListener){
                document.addEventListener('DOMContentLoaded', function () {
                    fn()
                })
            }else{
                document.attachEvent('onreadystatechange', function(){
                    if (document.readyState == 'complete') {
                        fn()
                    }
                })
            }
        },
        each : function(obj,fn) {
            if(jQuery.isArray(obj)){
                for(var i = 0;i < obj.length;i ++){
                    var res = fn.call(obj[i],i ,obj[i])
                    if(res === true) {
                        continue;
                    }else if(res === false){
                        break;
                    }
                }
            }else if(jQuery.isObject(obj)) {
                for(var key in obj) {
                    var res = fn.call(obj[key],key ,obj[key])
                    if (res === true) {
                        continue;
                    } else if (res === false) {
                        break;
                    }
                }
            }
            return obj
        },
        map : function(obj,fn) {
            var res = []
            if (jQuery.isArray(obj)){
                for (var i = 0; i < obj.length; i++){
                    var temp = fn(obj[i],i)
                    if(temp) {
                        res.push(temp)
                    }
                }
            } else if (jQuery.isObject(obj)){
                for (var key in obj){
                    var temp =fn(obj[key], key)
                    if (temp) {
                        res.push(temp)
                    }
                }
            }
            return res
        }
    })
    jQuery.prototype.init.prototype = jQuery.prototype
    window.jQuery = window.$ = jQuery
})(window)