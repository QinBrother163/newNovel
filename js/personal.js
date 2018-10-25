// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 personalcenter_v3 male';
    var female = 'container b_f7 personalcenter_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

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
