// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 male';
    var female = 'container b_f7 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 全局下标
var index = 1;

// 确认按钮
function okBtn() {
    var org_btn = document.querySelector('.org_btn_look');

    org_btn.onclick = function () {

        console.log('焦点：' + index);
        cssResult();
    }
}
okBtn();

// 按钮效果
function cssResult() {
    var org_btn = document.querySelector('.org_btn_look');

    org_btn.style.opacity = '.7';

    setTimeout(function () {
        org_btn.style.opacity = '1';
    },50)
}


// 焦点切换
function payToggle() {
    // 外层DIV
    var wrap = document.querySelector('.chooseBox');
    // 获取点击元素
    var spans = wrap.querySelectorAll('.flex_col');

    // 给元素绑定点击事件
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = setNodeToggle;
        spans[i].idx = i;
    }

    function setNodeToggle() {
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = 'flex_col';
        }
        index = this.idx;
        spans[this.idx].className = 'flex_col choosethis';
    }
}
payToggle();

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
