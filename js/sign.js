// 男女样式切换
function setSexStyle() {

    var male = 'container b_fff male';
    var female = 'container b_fff female';

    document.querySelector('.container').className = female;
}
setSexStyle();

// 签到确认按钮
function getSignBtn() {
    // 签到确认按钮元素
    var sign_btn = document.getElementById('sign_btn');
    // 提示框元素
    var signinbox = document.querySelector('.signinbox');
    // 提示框里的确认按钮元素
    var lastp = signinbox.querySelector('.lastp');

    sign_btn.onclick = function () {
        if (sign_btn.innerText == '立即签到'){
            publicShowStatus(signinbox,'block');
            publicToggleTitle(sign_btn, '今日已签到，明天再来吧')
        }
    };
    lastp.onclick = function () {
        publicShowStatus(signinbox,'none');
    }
}
getSignBtn();

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

// Public 函数 切换 标题
function publicToggleTitle(node, title) {
    node.innerHTML = title;
}
// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}