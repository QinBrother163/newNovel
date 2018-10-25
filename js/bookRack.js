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

// 点击加载提示
var loading_jump = document.querySelector('.loading_jump');
function setLoading(status) {
    loading_jump.style.display = status;

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}

// 设置焦点选择
function setFocus() {
    // 分类
    var type_sort = document.getElementById('type_sort');
    var sortLen = type_sort.querySelectorAll('li');
    // 状态
    var type_status = document.getElementById('type_status');
    var statusLen = type_status.querySelectorAll('li');
    // 类型
    var type_genre = document.getElementById('type_genre');
    var genreLen = type_genre.querySelectorAll('li');


    // 类型区
    for (var u = 0; u < genreLen.length; u++) {
        genreLen[u].onclick = genreSort;
        genreLen[u].idx = u;
    }
    function genreSort() {
        setLoading(status);
        for (var j = 0; j < genreLen.length; j++) {
            genreLen[j].className = '';
        }
        genreLen[this.idx].className = 'Cselected';
    }

    // 状态区
    for (var o = 0; o < statusLen.length; o++) {
        statusLen[o].onclick = statusSort;
        statusLen[o].idx = o;
    }
    function statusSort() {
        setLoading(status);
        for (var j = 0; j < statusLen.length; j++) {
            statusLen[j].className = '';
        }
        statusLen[this.idx].className = 'Cselected';
    }

    // 分类区
    for (var j = 0; j < sortLen.length; j++) {
        sortLen[j].onclick = setSort;
        sortLen[j].idx = j;
    }
    function setSort() {
        setLoading(status);
        for (var j = 0; j < sortLen.length; j++) {
            sortLen[j].className = '';
        }
        sortLen[this.idx].className = 'Cselected';
    }
}
setFocus();

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
