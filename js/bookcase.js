// 男女样式切换
function setSexStyle() {

    var male = 'container b_f7 bookshelf_v3 male';
    var female = 'container b_f7 bookshelf_v3 female';

    document.querySelector('.container').className = male;
}
setSexStyle();

// 管理中枢控制
function clearBtn() {
    // 最外层元素
    var bookshelf_list = document.querySelector('.bookshelf_list');
    // 管理按钮元素
    var bookcase_gl = document.querySelector('.bookcase_gl');
    // 取消按钮元素
    var bookcase_qx = document.querySelector('.bookcase_qx');
    // 删除按钮元素
    var del_btn_click = document.getElementById('del_btn_click');
    // 焦点遮罩层元素
    var focusNode = document.querySelectorAll('.edit-layer');
    // 焦点遮罩层里面的打勾元素
    var edit_layer_div = document.querySelectorAll('.edit_layer_div');
    // 删除按钮的数值元素
    var del_btn_span = document.querySelector('.del_btn_span');

    // 删除事件
    function delNode() {
        del_btn_click.onclick = function () {
            var delNode = $(".choose").parent().parent();
            for (var i = 0; i < delNode.length; i++) {
                bookshelf_list.removeChild(delNode[i]);
            }
        }
    }

    // 调用删除事件
    delNode();


    // 单个焦点选中事件
    function itemClickFocus() {
        for (var i = 0; i < focusNode.length; i++) {
            focusNode[i].onclick = setClickFocus;
            focusNode[i].idx = i;
        }
        function setClickFocus() {
            var x = edit_layer_div[this.idx].className == 'edit_layer_div';

            edit_layer_div[this.idx].className = x ? "edit_layer_div choose" : "edit_layer_div";

            // 选中的焦点元素集合
            setNumFocus();
        }
    }

    // 调用单个焦点选中事件
    itemClickFocus();

    // 获取选中焦点数量事件
    function setNumFocus() {

        // 选中的焦点元素集合
        var num = document.querySelectorAll('.choose').length;

        publicToggleTitle(del_btn_span, num);
    }


    // 取消按钮点击事件
    bookcase_qx.onclick = function () {
        // 获取剩余书籍数量
        var bookNum = document.querySelectorAll('.sec_min_3').length;

        // 还原状态
        publicToggleTitle(bookcase_gl, '管理');
        publicToggleTitle(bookcase_qx, '共' + bookNum + '本书');
        publicShowStatus(del_btn_click, 'none');
        publicShowList(focusNode, 'none');
        publicToggleClassName(edit_layer_div, 'edit_layer_div');
        publicToggleTitle(del_btn_span, 0);
        // 显示加载更多按钮
        publicShowStatus(document.querySelector('.load_more'), 'block');
    };

    // 管理按钮点击事件
    bookcase_gl.onclick = function () {
        // 隐藏加载更多按钮
        publicShowStatus(document.querySelector('.load_more'), 'none');

        switch (bookcase_gl.innerText) {
            case '管理':
                // 更改按钮内容--管理按钮
                publicToggleTitle(bookcase_gl, '全选');
                // 更改按钮内容--取消按钮
                publicToggleTitle(bookcase_qx, '取消');
                // 显示删除按钮
                publicShowStatus(del_btn_click, 'flex');
                // 显示焦点遮罩层
                publicShowList(focusNode, 'block');
                break;
            case '全选':
                // 更改按钮内容--管理按钮
                publicToggleTitle(bookcase_gl, '全不选');
                // 更改类名切换背景
                publicToggleClassName(edit_layer_div, 'edit_layer_div choose');
                // 更改数值
                setNumFocus();
                break;
            case '全不选':
                // 更改按钮内容--管理按钮
                publicToggleTitle(bookcase_gl, '全选');
                // 更改类名切换背景
                publicToggleClassName(edit_layer_div, 'edit_layer_div');
                // 更改数值
                setNumFocus();
                break;
            default:
                break;
        }
    }

}
clearBtn();

// 点击加载更多事件
function getAll() {
    // 最外层元素
    var bookshelf_list = document.querySelector('.bookshelf_list');
    // 点击加载更多元素
    var load_more = document.querySelector('.load_more');
    // 取消按钮元素
    var bookcase_qx = document.querySelector('.bookcase_qx');


    load_more.onclick = function () {
        getAllNode();
        clearBtn();


        // 获取书籍数量
        var bookNum = document.querySelectorAll('.sec_min_3').length;
        publicToggleTitle(bookcase_qx, '共' + bookNum + '本书');
    };

    function getAllNode() {
        var node = document.createElement('li');
        node.className = 'sec_min_3 del0';
        node.innerHTML =
            '<div class="edit-layer" style="display: none">' +
            '<div class="edit_layer_div"></div>' +
            '</div>' +
            '<a href="bookInfo.html">' +
            '<img src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="" class="lpimg">' +
            '<p class="lp_li_bookname">风云兵王3</p>' +
            '</a>';

        bookshelf_list.appendChild(node);
    }
}
getAll();

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
// Public 函数 切换 显示 数组
function publicShowList(node, status) {
    for (var i = 0; i < node.length; i++) {
        node[i].style.display = status
    }
}
// Public 函数 切换 classname
function publicToggleClassName(node, class_name) {
    for (var i = 0; i < node.length; i++) {
        node[i].className = class_name
    }
}