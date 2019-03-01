/**
 * Created by Administrator on 2018/11/30.
 */
window.onload = function () {
    $("#nav li").click(function () {
        $("#nav li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".item-box").hide().eq($(this).index()).show();
    });
};

$(function () {
    $("#real_name").click(function () {
        $("#b").hide();
    });
    $("#credential_num").click(function () {
        $("#b").show();
    })
});


