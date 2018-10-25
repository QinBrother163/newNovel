// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 get_more_v3 male';
    var female = 'container b_f7 get_more_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 请求数据
function getData(i) {
    for (var j = 0; j < 5; j++) {
        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="javascript:;" class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/8ugS5UUDSLAEM271dqkXjKHu2EOKtIgcKbYJAJfa.jpeg" alt="" class=" lp_li_imgWrapimg">' +
            '<div class="title_r">' +
            '<div class="lp_li_name">总裁的亿万小妻子' + i + '</div>' +
            '<div class="Detail">他受过严重的心理创伤，情感麻木，对女人只有厌恶没有爱慕。她优雅聪慧，为了不重蹈他前妻的覆辙，婚后生活，步步为营。面对他的无视疏离，她从不曾退缩放弃，坚信爱是化解恨最好的方式。当冷酷外衣终被她层层拨开，他却残忍的发现，自己不过是她复仇的工具。爱已随风飘，情已被海葬，是谁在耳边说，心是可以收回的……</div>' +
            '<div class="info">' +
            '<div>' +
            '<span class="c_f50 book_status_border">已完结</span> ' +
            '<span class="book_status_border bdc_grey c_999">都市</span> ' +
            '<span class="book_status_border bdc_grey c_999">悬疑</span> ' +
            '<span class="book_status_border "><span>235</span>万字</span> ' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>';
        $('.box_ul_p').append(node);
    }

    if (i >= 10) {
        window.status = true;
        $('.catalog_item').html('加载完毕!')
    }

}

// 滚动加载
$(document).ready(function () {

    $(document).endlessScroll({

        fireDelay: 0,

        callback: function (i, p) {

            if (!window.status) {
                getData(i);
            }
        }
    });
});

// open菜单
function openMeun() {
    // 菜单按钮
    var btn = document.querySelector('.wright');
    // 菜单内容
    var menu_modal_bg = document.querySelector('.menu-modal-bg');
    // body元素
    var wrap = document.getElementsByTagName("body")[0];


    btn.onclick = function () {
        var open = btn.className == 'wright';
        btn.className = open ? 'wright open' : 'wright';
        wrap.className = open ? 'no_overflow' : '';
        menu_modal_bg.className = open ? 'menu-modal-bg openMenu' : 'menu-modal-bg';
    }
}
openMeun();

// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();

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
    document.getElementById('root').style.display = 'block';
    // 设置页面----《《《《《《《《《《《《《


    timer = setInterval("countDown(1538099428)", 1000);
};