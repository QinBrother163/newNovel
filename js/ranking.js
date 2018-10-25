// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 male';
    var female = 'container b_f7 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 排行榜切换
function rankToggle() {
    // 外层DIV
    var wrap = document.querySelector('.am-segment');
    // 获取点击元素
    var spans = wrap.querySelectorAll('span');

    // 内容元素
    var ranking_box = document.querySelectorAll('.ranking_box');

    // 给元素绑定点击事件
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = setNodeToggle;
        spans[i].idx = i;
    }

    function setNodeToggle() {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
            ranking_box[i].style.display = 'none';
        }
        setLoading('block');
        spans[this.idx].className = 'am-segment-item-focus';
        ranking_box[this.idx].style.display = 'block';
    }
}
rankToggle();

// 点击加载提示
function setLoading(status) {
    var loading_jump = document.querySelector('.loading_jump');

    loading_jump.style.display = status;

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}

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
