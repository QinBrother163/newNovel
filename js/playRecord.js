// 男女样式切换
function setSexStyle() {

    var male = 'container b_eee detail_v3 male';
    var female = 'container b_eee detail_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 请求数据
function getData(i) {
    for (var j = 0; j < 5; j++) {
        var node = document.createElement('li');

        node.className = 'comment catalog_item';
        node.innerHTML =
            '<div class="avatar">' +
            '<img src="http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132" alt="">' +
            '</div>' +
            '<div class="c-container page_pr">' +
            '<div class="c-name flex_box flex_bt pt20">' +
            '<span class="avatar-name">名字' + j + '</span>' +
            '<time>2018-07-30 22:21:26</time>' +
            '</div>' +
            '<div class="c-cont pt67">赠送' +
            '<img src="https://static.youshuge.com/gift_img/flower.png" class="w1r">' +
            '<span class="cl-orange">鲜花</span> 给作者' +
            '</div>' +
            '</div>';
        $('#htmlCommentList').append(node);
    }

    if (i >= 10) {
        window.status = true;
        $('.catalog_p').html('加载完毕!')
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