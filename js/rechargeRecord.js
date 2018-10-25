// 男女样式切换
function setSexStyle() {

    var male = 'container b_fff male';
    var female = 'container b_fff female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 点击加载更多
function getAllData() {
    // 充值
    var load_more_cz = document.querySelectorAll('.load_more')[0];

    load_more_cz.onclick = function () {
        getNode_cz();
    };
    function getNode_cz() {
        var box = document.getElementById('getNode_cz');
        var node = document.createElement('li');

        node.className = 'clearfix p020 flex_box flex_bt flex_items_ct line';
        node.innerHTML =
            '<p class="clearfix"><span class="re_money">50元</span>--<span>未支付</span></p>'+
            '<p class="clearfix flex_box flex_col">' +
            '<span class="re_time">2018-08-03 11:07:53</span>' +
            '<span class="re_name2">5000+3000书币</span>' +
            '</p>' ;

        box.appendChild(node);
    }

    // 签到
    var load_more_qd = document.querySelectorAll('.load_more')[1];

    load_more_qd.onclick = function () {
        getNode_qd();
    };
    function getNode_qd() {

        var box = document.getElementById('getNode_qd');
        var node = document.createElement('li');

        node.className = 'clearfix flex_box flex_bt flex_items_ct line ptb24';
        node.innerHTML =
            '<p class="re_name">签到+40阅读币</p>'+
            '<p class="re_attime">2018-08-01 09:09:05</p>';
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
    var detailList = document.querySelectorAll('.detail');


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