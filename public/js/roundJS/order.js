/**
 * Created by Administrator on 2018/12/10.
 */
var str=window.location.search.substr(1).split('=');

console.log(str[1])
console.log(str[0]=='id')
if(str[0]=='id'){
    $.ajax({
        url:'/getaddressone',
        data:{uid:1},
        success:function (res) {
            $(' .address-name').html(res[0].a_name);
            $(' .address-ph').html(res[0].a_phone);
            $('.address-address').html(res[0].a_inTheArea);
            $(' .address-post').html(res[0].a_postalcode);
        }
    })





    $.ajax({
        url:'/orderround',
        data:{mid:str[1]},
        success:function (res) {
            $('.ths .one').prepend('<img src="'+res[0].m_show+'" alt="">');
            $('.ths .two span').html(res[0].m_price);
            $('.ths .one p a').html(res[0].m_name);
            $.ajax({
                url:'/ordernum',
                data:{mid:str[1]},

                success:function (res) {

                    $('.ths .three span').html(res[0].m_num);
                    $('.money span span').html('').html($('.ths .two span').html()*res[0].m_num);
                }

            })
        }
    });
    $('.btn-submit').on('click',function () {
        window.open('pay.html?data='+str[1]+'','_self');
    })
}else{
    $.ajax({
        url:'/gemesaddone',
        data:{
            gid:str[1],
        },
        success:function (res) {
            console.log(res);


            $('.ths .one').prepend('<img src="../'+res[0].p_path2+'" alt="">');
            $('.ths .two span').html(res[0].g_price);
            $('.ths .one p a').html(res[0].g_name);
            $('.th-last .money .o').html(res[0].g_price);
            $('.title-one').hide();
            $('.address').hide();

        }
    });
    $('.btn-submit').on('click',function () {
        window.open('pay.html?gdata='+str[1]+'','_self');
    })
}


















