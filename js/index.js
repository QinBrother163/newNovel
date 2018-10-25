// 男女样式切换
function setSexStyle() {

    var male = 'container2 b_f7 male';
    var female = 'container2 b_f7 female';

    document.querySelector('.container2').className = male;

    //更改底部导航图片---- true 女，false 男
    // setBottomNavImg(false);
}
setSexStyle();


// 排行榜切换
function rankToggle() {
    // 外层DIV
    var wrap = document.querySelector('.am-segment');
    // 获取点击元素
    var spans = wrap.querySelectorAll('span');

    // 给元素绑定点击事件
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = setNodeToggle;
        spans[i].idx = i;
    }

    function setNodeToggle() {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        spans[this.idx].className = 'am-segment-item-focus';
    }
}
rankToggle();


// 男女按钮切换
function setToggleSex() {
    // 男女按钮的外层DIV
    var wrap = document.getElementById('setSex');
    // 男女按钮元素
    var ems = wrap.querySelectorAll('em');
    // 中枢控制DIV元素
    var style_body = document.getElementById('style_body');


    // 设置点击
    for (var i = 0; i < ems.length; i++) {
        ems[i].onclick = setSexClassName;
        ems[i].idx = i;
    }
    // 更改classname   --  更改导航图片
    function setSexClassName() {
        for (var i = 0; i < ems.length; i++) {
            ems[i].className = '';
        }
        ems[this.idx].className = 'sel_sex';

        switch (this.idx){
            case 1:
                style_body.className = 'container2 b_f7 female';

                break;
            default:
                style_body.className = 'container2 b_f7 male';
                break;
        }
    }
}
setToggleSex();



// 倒计时
var timer;
function countDown(num) {

    var unixtimestamp = new Date(num * 1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    var time_target_str = year + "/" + month.substring(month.length - 2, month.length) + "/" + date.substring(date.length - 2, date.length)
        + " " + hour.substring(hour.length - 2, hour.length) + ":"
        + minute.substring(minute.length - 2, minute.length) + ":"
        + second.substring(second.length - 2, second.length);

    var time_now = new Date().getTime();
    var time_target = Date.parse(time_target_str);
    var time_cut = time_target - time_now;

    var days = Math.floor(time_cut / 1000 / 60 / 60 / 24);
    var hours = Math.floor(time_cut / 1000 / 60 / 60 % 24);
    var minutes = Math.floor(time_cut / 1000 / 60 % 60);
    var seconds = Math.floor(time_cut / 1000 % 60);
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    if (time_cut >= 0) {
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
    } else {
        window.clearInterval(timer);
        document.getElementById("day").innerHTML = '00';
        document.getElementById("hour").innerHTML = '00';
        document.getElementById("minute").innerHTML = '00';
        document.getElementById("second").innerHTML = '00';
    }
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

window.onload = function () {
    // 设置页面----》》》》》》》》》》》》》
    !function () {
        var a = "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}ins,a{text-decoration:none}",
            b = document.createElement("style");
        if (document.getElementsByTagName("head")[0].appendChild(b), b.styleSheet) b.styleSheet.disabled || (b.styleSheet.cssText = a); else try {
            b.innerHTML = a
        } catch (c) {
            b.innerText = a
        }
    }();
    !function (a, b) {
        function c() {
            var b = f.getBoundingClientRect().width;
            b / i > 540 && (b = 540 * i);
            var c = b / 10;
            f.style.fontSize = c + "px", k.rem = a.rem = c
        }

        var d, e = a.document, f = e.documentElement, g = e.querySelector('meta[name="viewport"]'),
            h = e.querySelector('meta[name="flexible"]'), i = 0, j = 0, k = b.flexible || (b.flexible = {});
        if (g) {
            console.warn("将根据已有的meta标签来设置缩放比例");
            var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            l && (j = parseFloat(l[1]), i = parseInt(1 / j))
        } else if (h) {
            var m = h.getAttribute("content");
            if (m) {
                var n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/);
                n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
            }
        }
        if (!i && !j) {
            var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
                q = a.devicePixelRatio;
            i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
        }
        if (f.setAttribute("data-dpr", i), !g)if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g); else {
            var r = e.createElement("div");
            r.appendChild(g), e.write(r.innerHTML)
        }
        a.addEventListener("resize", function () {
            clearTimeout(d), d = setTimeout(c, 300)
        }, !1), a.addEventListener("pageshow", function (a) {
            a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
        }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
                e.body.style.fontSize = 12 * i + "px"
            }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
            var b = parseFloat(a) * this.rem;
            return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
        }, k.px2rem = function (a) {
            var b = parseFloat(a) / this.rem;
            return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
        }
    }(window, window.lib || (window.lib = {}));
    // 设置页面----《《《《《《《《《《《《《
    document.getElementById('root').style.display = 'block';

    var swiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        speed: 1000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        paginationClickable: true
    });
    // 初始化倒计时时间
    timer = setInterval("countDown(1538099428)", 1000);
};