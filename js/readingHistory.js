// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 bookshelf_v3 male';
    var female = 'container b_f7 bookshelf_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 点击加载更多
function getAllData() {
    // 按钮元素
    var load_more_sj = document.querySelector('.load_more');
    // 最外层元素
    var bookshelf_list = document.querySelector('.am-list-body');

    var j = 0;

    // 点击按钮
    load_more_sj.onclick = function () {
        getNode();
    };

    function getNode() {
        j++;
        var node = document.createElement('div');
        node.className = 'am-list-item';
        node.innerHTML =
            '<div class="am-list-line">' +
            '<div class="am-list-content">' +
            '<div class="item--2A330">' +
            '<img class="thumb--2nIpW-img" src="https://qcdn.zhangzhongyun.com/covers/153302608645.jpg?imageView2/0/w/300/q/75" alt="">' +
            '<div class="desc--1s90A">' +
            '<div class="title--UMlns">第7章 原来'+j+'</div>' +
            '<div class="article--srEKm">姻缘天作婚事成</div>' +
            '<div class="created--3skKp">' +
            '<span class="c_f50 book_status_border">已完结</span> ' +
            '<span class="book_status_border bdc_grey c_999">都市</span>' +
            '</div>' +
            '</div>' +
            '<div class="progress--1TjDM">' +
            '<p class="c_f50 book_status_border item_del" style="margin-top: 1.1rem">删除</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        bookshelf_list.appendChild(node);
        delNode();
    }
}
getAllData();


// 删除处理
function delNode() {

    // 外层元素
    var YD = document.querySelector('.am-list-body');
    // 删除按钮元素
    var deletethis = YD.querySelectorAll('.item_del');
    // 需要删除的元素集合
    var delList = YD.querySelectorAll('.am-list-item');

    //     删除处理 - 阅读
    function setYDclick() {
        for (var i = 0; i < deletethis.length; i++) {
            deletethis[i].onclick = setYDdel;
            deletethis[i].idx = i;
        }
    }

    function setYDdel() {
        // 删除
        YD.removeChild(delList[this.idx]);
        // 重新序列元素
        delNode();
        // 检测是否删除完
        setEmpty(delList);
    }

    // 判断是否删除为空
    function setEmpty(isNum) {
        if (isNum.length == 1) {
            var no_centent = document.querySelector('.no_centent');
            // 显示没有数据
            publicShowStatus(no_centent, 'block');
            // 隐藏点击加载更多
            publicShowStatus(document.querySelector('.load_more'), 'none');
        }
    }

    setYDclick();
}
delNode();

// open菜单
function sopenMeun() {
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
sopenMeun();

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