

// 请求数据
function getData(i) {

    for (var j = 0; j < 5; j++) {
        var node = document.createElement('li');

        node.className = 'catalog_item';
        node.innerHTML = '<a href="lookBook.html" class="lp_li_aa catalog_item_a pay-item">第二十一章：老师许晓晴' + i + '</a>';

        $('.cataloglul').append(node);
    }

    if (i >= 10) {
        window.status = true;
        $('.tc').html('加载完毕!')
    }

}


// 滚动加载
$(document).ready(function () {

    $(document).endlessScroll({

        fireDelay: 0,

        callback: function (i,p) {

            if (!window.status) {
                getData(i);
            }
        }
    });
});



// 排序按钮
function getSort() {
    var menu = document.querySelector('.menu');

    menu.onclick = function () {
        var is_i = menu.className == 'menu iconDown';

        menu.className = is_i ? 'menu iconTop' : 'menu iconDown';

        setLoading();
    }
}
getSort();

// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();
// 点击加载提示
function setLoading() {
    var loading_jump = document.querySelector('.loading_jump');

    loading_jump.style.display = 'block';

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}