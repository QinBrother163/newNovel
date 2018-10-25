// 男女样式切换
function setSexStyle() {

    var male = 'container b_eee male';
    var female = 'container b_eee female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// open菜单
function sopenMeun() {
    // 菜单按钮
    var wright = document.querySelector('.wright');

    // 菜单内容
    var menu_modal_bg = document.querySelector('.menu-modal-bg');

    wright.onclick = function () {
        var x = wright.className == 'wright';

        wright.className = x ? 'wright open' : 'wright';
        menu_modal_bg.style.display = x ? 'block' : 'none';
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