/**
 * Created by Administrator on 2018/12/10.
 */
// var str=window.location.search.substr(1).split('=');



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



$.ajax({
    url:'/roundcartone',
    data:{mid:str},
    success:function (res) {



        $.each(res,function(i,v){
            $('.p_box2').append(` <div class="p_box2_box">
             <img src="../${v.m_show}" alt="">
             <div class="div1">${v.m_name}</div>
             <div class="div2"></div>
             <div class="div2 price">￥<span>${v.m_price}</span>.00</div>
             <div class="div2 num">x<span>1</span></div>

    </div>`)
        });
        /*获取商品的价格和*/
        $.ajax({
            url:'/roundcartsum',
            data:{mid:str},
            success:function (res) {
                console.log(res)
                $('#price').html(res[0].sumprice);
            }

        })
    }
});


    $('.btn-submit').on('click',function () {
        var oDate=new Date();
        var y=oDate.getFullYear();
        var mon=oDate.getMonth()+1;
        var d=oDate.getDate();
        var h=oDate.getHours();
        var m=oDate.getMinutes();
        var s=oDate.getSeconds();
        function Appendzero(obj) {
            if(obj<10) {
                return '0'+obj;
            }
            else{
                return obj;
            }
        }
        var p_Date=y+'-'+Appendzero(mon)+'-'+Appendzero(d)+' '+Appendzero(h)+':'+Appendzero(m)+':'+Appendzero(s);
        var timer=y+'-'+mon+'-'+d;
        var num=$('.num span').html();
        var p=$('.price span').html()
        var ordernum=y.toString()+Appendzero(mon).toString()+Appendzero(d).toString()+Appendzero(h).toString()+Appendzero(m).toString()+Appendzero(s).toString()+num.toString()

        /*向后台添加数据*/
        $.ajax({
            url:'/roundcartoneadd',
            data:{
                uid:1,
                mid:str,
                ordernum:ordernum,
                time:p_Date,},
            success:function (res) {
                alert('购买成功')
                 $.ajax({
                     url:'mcart',
                     data:{mid:str},
                     success:function (res) {
                         console.log(res)
                     }
                 })
            }
        })

    });


