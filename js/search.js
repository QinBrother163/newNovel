// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 male';
    var female = 'container b_f7 female';

    document.querySelector('.container').className = male;
}
setSexStyle();


// 请求数据--精彩推荐
var x = 0;
document.getElementById('recommend').onclick = function () {
    x ++;
    if (!window.status) {
        getData(x);
    }
};

function getData(x) {

    for (var j = 0; j < 5; j++) {
        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="javascript:;" class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/8ugS5UUDSLAEM271dqkXjKHu2EOKtIgcKbYJAJfa.jpeg" alt="" class=" lp_li_imgWrapimg">' +
            '<div class="title_r">' +
            '<div class="lp_li_name">总裁的亿万小妻子' + x + '</div>' +
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
        $('#box_tj').append(node);
    }

    if (x >= 5) {
        window.status = true;
        $('#recommend').html('加载完毕!')
    }

}
// 请求数据--精彩推荐的上拉
function getData_ss(i) {
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
        $('#box_ss').append(node);
    }

    if (i >= 10) {
        window.is_r = true;
        $('#con').html('加载完毕!')
    }

}

// 滚动加载
$(document).ready(function () {
    $('#box_ss').endlessScroll({

        fireDelay: 0,

        callback: function (i, p) {

            if (!window.is_r) {
                getData_ss(i);
            }
        }
    });
});




// 手机收索
$('.secrch_box').bind('search', function () {
    querySearchVal();
});
// 按钮收索
document.querySelector('.search_span').onclick = function () {
    querySearchVal();
};

// 获取input的内容
function querySearchVal() {
    var secrch_box = document.querySelector('.secrch_box');

//    内容
    alert('收索的内容为: ' + secrch_box.value);
    toggleShowBox();
}


// 收索时隐藏精彩推荐 -- 显示收索内容
function toggleShowBox() {
    // 索搜内容
    var boxList_s = document.querySelectorAll('.boxList')[0];
    // 精彩推荐
    var boxList_j = document.querySelectorAll('.boxList')[1];

    publicShowStatus(boxList_j, 'none');
    publicShowStatus(boxList_s, 'block');
}


// 换一换
function toggleChange() {
    var change = document.getElementById('change');

    var em = change.querySelector('em');

    change.onclick = function () {
        em.className = 'refreshing';
        setTimeout(function () {
            em.className = '';
        }, 1500)
    }
}

toggleChange();

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

// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}