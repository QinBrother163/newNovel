// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 consument_v3 male';
    var female = 'container b_f7 consument_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 点击加载更多
function getAllData() {
    // 章节消费
    var load_more_zj = document.querySelectorAll('.load_more')[0];

    load_more_zj.onclick = function () {
        getNode_zj();
    };
    function getNode_zj() {
        var box = document.getElementById('getNode_zj');
        var node = document.createElement('li');

        node.className = 'clearfix p020 flex_box flex_bt flex_items_ct line';
        node.innerHTML =
            '<p class="clearfix flex_box flex_col">' +
            '<span class="re_name2">超凡兵王</span>' +
            '<span class="re_name3 overflow">第二十一章：老师许晓晴（五）</span> <span class="re_time">2018-08-03 11:07:53</span>' +
            '</p>' +
            '<p class="clearfix"><span class="re_money"> - 27阅读币</span></p>';

        box.appendChild(node);
    }

    // 全本购买
    var load_more_qb = document.querySelectorAll('.load_more')[1];

    load_more_qb.onclick = function () {
        getNode_qb();
    };
    function getNode_qb() {

        var box = document.getElementById('getNode_qb');
        var node = document.createElement('li');

        node.className = 'clearfix p020 flex_box flex_bt flex_items_ct line';
        node.innerHTML =
            '<p class="clearfix flex_box flex_col">' +
            '<span class="re_name2">超凡兵王1</span>' +
            '<span class="re_time">2018-08-03 11:07:53</span>' +
            '</p>' +
            '<p class="clearfix"><span class="re_money"> - 5000阅读币</span></p>';
        box.appendChild(node);
    }

    // 打赏记录
    var load_more_ds = document.querySelectorAll('.load_more')[2];

    load_more_ds.onclick = function () {
        getNode_ds();
    };
    function getNode_ds() {

        var box = document.getElementById('getNode_ds');
        var node = document.createElement('li');

        node.className = 'clearfix flex_box flex_bt flex_items_ct line';
        node.innerHTML =
            '<div class="flex_box flex_col">' +
            '<p class="re_name">鲜花<img src="https://static.youshuge.com/gift_img/flower.png" alt="">*1</p>' +
            '<span class="re_time">2018-08-03 11:06:16</span>' +
            '</div>' +
            '<p class="re_info fr"><span class="re_money">- 99阅读币</span></p>';
        box.appendChild(node);
    }
}
getAllData();
// tab切换
function setTab() {
    // 标题
    var tab_box = document.querySelector('.tab_box');
    var tab_boxList = tab_box.querySelectorAll('li');
    // 内容
    var detailList = document.querySelectorAll('.XFlist');


    for (var i = 0; i < tab_boxList.length; i++) {
        tab_boxList[i].onclick = setTabShow;
        tab_boxList[i].idx = i;
    }
    function setTabShow() {
        for (var i = 0; i < tab_boxList.length; i++) {
            tab_boxList[i].className = '';
            detailList[i].style.display = 'none';
        }
        tab_boxList[this.idx].className = 'clicked';
        detailList[this.idx].style.display = 'block';

        setLoading('block');
    }
}
setTab();

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
// 点击加载提示
function setLoading(status) {
    var loading_jump = document.querySelector('.loading_jump');

    loading_jump.style.display = status;

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}