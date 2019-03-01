/**
 * Created by Administrator on 2018/12/10.
 */
var str=window.location.search.substr(1).split('=');

$.ajax({
    url:'/shopround',
    data:{id:str[1]},
    success:function (res) {
        console.log(res);
        $('.left').append('<img src="'+res[0].m_show+'" alt="">');
        $('.right_tilte').html(res[0].m_name);
        $('.right_price span').html(res[0].m_price);
        if(res[0].r_size!=null){
            $('.specification .text').html('尺寸');
            $('.specification .baozhun').html(res[0].r_size);
            $('.dis').show();
            $('.specification .color').html(res[0].r_color);
        }
        else if(res[0].r_edition!=null){
            $('.specification .text').html('类型');
            $('.specification .baozhun').html(res[0].r_edition);
        }
        else if(res[0].r_spec!=null){
            $('.specification .text').html('类型');
            $('.specification .baozhun').html(res[0].r_spec);
        }else {
            $('.dis').show();
            $('.specification .color').html(res[0].r_color);
        };
        $('.s_box3 .img').append('<img src="./'+res[0].m_introduce+'" alt="" style="width: 1200px">');
        console.log(res[0].m_introduce)
    }
})

/*数量加减*/
$('.SK-product-count .jia').on('click',function () {
    $.ajax({
        url:'/shopround',
        data:{id:str[1]},
        success:function (res) {
            var val=$('.SK-product-count input').val();
            if(val<=res[0].m_surplus){
                var str=Math.floor(val)+Math.floor(1);
                $('.SK-product-count input').val(str);
            }
        }
    })


}) ;
$('.SK-product-count .jian').on('click',function () {
    var val=$('.SK-product-count input').val();
    if(val>=1){
        var str=Math.floor(val)-Math.floor(1);
        if(str<=1){
            $('.SK-product-count input').val(1);
        }else {
            $('.SK-product-count input').val(str);
        }
    }

})

$('.car').click(function () {
    $('#shop').css('display','block')
});
$('.s-close').click(function () {
    $('#shop').css('display','none')
});
$('.countine').click(function () {
    $('#shop').css('display','none')
});
$('.btn_wish').on('click',function () {
    $.ajax({
        url:'/wishshoproundone',
        data:{shopid:str[1],
            uid:1},
        success:function (res) {
            console.log(1)
            $('.btn_wish span').html('已加入心愿单');
            $('.btn_wish i').css({
                'color':'#ff6900'
            });
        }
    })
});
$('.btn_shop_click').on('click',function () {
    $.ajax({
        url:'/wishadd',
        data:{mid:str[1],
            uid:1,},
        success:function (res) {
            $('.btn_wish span').html('已加入心愿单');
            $('.btn_wish i').css({
                'color':'#ff6900'
            });
        }
    })
});
$('.btn_buy').on('click',function () {
    var num=$('.SK-product-count input').val();
    window.open('order.html?id='+str[1]+'','_self');
    $.ajax({
        url:'/shopcartRound',
        data:{
            uid:1,
            mid:str[1],
            num:num
        },
        success:function (res) {
         // console.log('hello word')
        }
    })
});




var one=document.querySelector('.one');
var two=document.querySelector('.two');
var img=document.querySelector('.img');
var ser=document.querySelector('.service');

one.onclick=function () {
    img.style.display='block';
    ser.style.display='none'
} ;
two.onclick=function () {
    img.style.display='none';
    ser.style.display='block'
};

$('.right-type_one .content').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$('.s_box2 li').click(function () {
    $(this).addClass('activ').siblings().removeClass('activ');
});
