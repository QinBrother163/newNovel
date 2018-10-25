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


// 获取路径参数判断入口
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
// 设置页面标题
function setPageTitle() {

    var page_id = getQueryVariable("id");
    var page_title;

    switch (page_id) {
        case '1':
            console.log('主编推荐');
            page_title = '主编推荐';
            break;
        case '2':
            console.log('新书推荐');
            page_title = '新书推荐';
            break;
        case '3':
            console.log('小说精选');
            page_title = '小说精选';
            break;
        case '4':
            console.log('玄幻修仙');
            page_title = '玄幻修仙';
            break;
        case '5':
            console.log('校园异能');
            page_title = '校园异能';
            break;
        case '6':
            console.log('都市情感');
            page_title = '都市情感';
            break;
        case '7':
            console.log('魔鬼灵异');
            page_title = '魔鬼灵异';
            break;
        default:
            break;
    }
    document.getElementById('topTitle').innerText = page_title;
}
setPageTitle();

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
