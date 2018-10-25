// 男女样式切换
function setSexStyle() {

    var male = 'container b_eee detail_v3 male';
    var female = 'container b_eee detail_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 全局提示框元素
var msg = document.getElementById('msg');


//-- 书架 打赏 -- 事件
function setBookadd() {
    // 加入书架元素--底部
    var public_nav_div = document.querySelectorAll('.public_nav_div')[2];
    // 打赏按钮元素--底部
    var btn_play_bottom = document.querySelectorAll('.public_nav_div')[0];
    // 加入书架里的span元素
    var wrap_span = public_nav_div.querySelector('span');
    // 加入书架元素--顶部
    var addBook = document.getElementById('addBook');
    // 数量元素的外层元素
    var wrap_num = document.querySelector('.statistics_num');
    // 加入书架的数量元素
    var addbook_num = wrap_num.querySelectorAll('li')[0];
    // 打赏的数量元素
    var play_num = wrap_num.querySelectorAll('li')[2];
    // 打赏按钮元素--顶部
    var btn_play = document.getElementById('btn_play');
    // 打赏弹框元素
    var signinbox = document.querySelector('.signinbox');
    // 打赏弹框里的关闭遮罩层元素
    var clickpop = signinbox.querySelector('.clickpop');
    // 打赏弹框里的选中弹框元素
    var dls = signinbox.querySelectorAll('dl');
    // 打赏里的确认按钮元素
    var btn_ok = signinbox.querySelector('.blue_btnn');
    // 用户头像外层元素
    var htmlCommentList = document.getElementById('userPhoto_wrap');


    // 打赏--绑定点击
    btn_play.onclick = function () {
        setPlayTour();
    };
    btn_play_bottom.onclick = function () {
        setPlayTour();
    };


    // 打赏处理事件
    function setPlayTour() {
        var is_focus = 2;

        // 初始化焦点事件
        function initFocus() {
            for (var i = 0; i < dls.length; i++) {
                dls[i].className = 'ds_choose';
            }
            dls[is_focus].className = 'ds_choose chooseulthis';
        }

        initFocus();

        publicShowStatus(signinbox, 'block');

        // 焦点选择事件
        function setFocus() {
            for (var i = 0; i < dls.length; i++) {
                dls[i].onclick = getFocus;
                dls[i].idx = i;
            }
            function getFocus() {
                for (var i = 0; i < dls.length; i++) {
                    dls[i].className = 'ds_choose';
                }
                dls[this.idx].className = 'ds_choose chooseulthis';
                // 获取选择的下标
                is_focus = this.idx;
            }
        }

        setFocus();

        // 打赏确认按钮事件
        btn_ok.onclick = function () {
            publicShowStatus(signinbox, 'none');
            // 有钱时的状态
            publicSetTimeout(msg, '打赏成功!');
            // 更改打赏数量
            setAddBookNum(play_num, true);


            // 限制添加入页面的元素数量
            if (htmlCommentList.querySelectorAll('.avatar').length <= 7) {
                addNode(is_focus);
            }
            // 没有钱时的状态
            // publicSetTimeout(msg, '余额不足!');
        }
    }

    // 打赏成功后添加页面元素事件
    function addNode(is_idx) {
        var node = document.createElement('div');
        node.className = 'avatar pr20';

        node.innerHTML = '<img src="http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132" alt="">';

        htmlCommentList.prepend(node);
    }


    // 打赏--关闭打赏弹框
    clickpop.onclick = function () {
        publicShowStatus(signinbox, 'none');
    };

    // 加入书架--绑定点击
    public_nav_div.onclick = function () {

        switch (wrap_span.innerHTML) {
            case '加入书架':
                publicSetTimeout(msg, '加入书架成功!');
                publicToggleTitle(wrap_span, '已加入书架');
                setAddBookNum(addbook_num, true);
                break;
            case '已加入书架':
                publicToggleTitle(wrap_span, '加入书架');
                setAddBookNum(addbook_num, false);
                break;
            default:
                break;
        }
    };
    // 加入书架--绑定点击
    addBook.onclick = function () {

        switch (addBook.innerHTML) {
            case '加入书架':
                publicSetTimeout(msg, '加入书架成功!');
                publicToggleTitle(addBook, '已加入书架');
                setAddBookNum(addbook_num, true);
                break;
            case '已加入书架':
                publicToggleTitle(addBook, '加入书架');
                setAddBookNum(addbook_num, false);
                break;
            default:
                break;
        }
    };
    // 更改加入书架的数量
    function setAddBookNum(node, status) {
        var num = parseInt(node.innerText);
        if (status) {
            num++;
        } else {
            num--;
        }
        node.innerText = num;
    }
}
setBookadd();



// 小说介绍查看全部
function getAll() {
    var icon_more = document.querySelector('.icon_more');
    var Detail = document.getElementById('Detail');

    var i = icon_more.className == 'icon_more has_more_detail';

    icon_more.onclick = function () {
        icon_more.className = i ? 'icon_more no_more_detail' : 'icon_more has_more_detail';
        Detail.className = i ? 'Detail c333 fs_28 cancel_clamp  auto_height' : 'Detail c333 fs_28 cancel_clamp';
        getAll();
    }
}
getAll();

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
// Public 函数 切换 标题
function publicToggleTitle(node, title) {
    node.innerHTML = title;
}
// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}

// Public 函数 自动隐藏提示弹框
function publicSetTimeout(node, title) {
    node.innerText = title;
    publicShowStatus(node, 'block');
    setTimeout(function () {
        publicShowStatus(node, 'none');
    }, 1500);
}