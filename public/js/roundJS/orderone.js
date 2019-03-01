/**
 * Created by Administrator on 2018/12/10.
 */
function GetShop() {
    var s=window.location.search.substr(1).split('=');
    var arr=[];
    for (var i=0;i<s.length;i++){
        arr.push(parseInt(s[i]))
    }
    arr.splice(0,1);
    // arr.pop();
    if(s!=null)return (arr);
    return null;
}
var str=GetShop();






/*获取地址*/
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

/*获取商品信息*/
    $.ajax({
        url:'/roundcartone',
        data:{mid:str},
        success:function (res) {
            $.each(res,function (i,v) {
                $('.th-box').append(`
   <div class="clearfix shop-div">
            <div class="one">
            <img src="../${v.m_show}" alt="">
            <p><a href="javascript:;">${v.m_name}</a></p></div>
            <div class="two">￥<span>${v.m_price}</span>.00</div>
            <div class="three">x<span>1</span></div>
    </div>
                `)
            });
            /*获取商品的价格和*/
            $.ajax({
                url:'/roundcartsum',
                data:{mid:str},
                success:function (res) {
                    // console.log(res)
                    $('.money .o').html(res[0].sumprice)
                }

            })
        }
    });

    $('.btn-submit').on('click',function () {
        window.open('paytwo.html?'+window.location.search.substr(1)+'','_self');
    })











