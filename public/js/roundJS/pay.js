/**
 * Created by Administrator on 2018/12/10.
 */
var str=window.location.search.substr(1).split('=');











if(str[0]=='data'){
    $.ajax({
        url:'/orderround',
        data:{mid:str[1]},
        success:function (res) {
            $('.p_box2').prepend('<img src="'+res[0].m_show+'" alt="">');
            $('.p_box2 .div1').html(res[0].m_name);
            $('.p_box2 .price span').html(res[0].m_price);
            $('#price').html(res[0].m_price);
            $.ajax({
                url:'/ordernum',
                data:{mid:str[1]},
                success:function (res) {
                    $('.p_box2 .num span').html(res[0].m_num);
                    $('.p_box3 #price').html($('.p_box2 .price span').html()*res[0].m_num);
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
        console.log(ordernum);
        $.ajax({
            url:'/payorderadd',
            data:{
                uid:1,
                mid:str[1],
                time:p_Date,
                number:num,
                ordernum:ordernum
            },
            success:function (res) {
                alert('购买成功');
                $.ajax({
                   url:'/msurplusone',
                    data:{mid:str[1],number:num},
                    success:function (res) {
                        console.log(res)
                    }
                });
            }
        })
    });
}else {
    $.ajax({
        url:'/gemesaddone',
        data:{gid:str[1]},
        success:function (res) {
            $('.p_box2').prepend('<img src="../'+res[0].p_path2+'" alt="">');
            $('.p_box2 .div1').html(res[0].g_name);
            $('.p_box2 .price span').html(res[0].g_price);
            $('#price').html(res[0].g_price);

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
        console.log(ordernum);
        $.ajax({
            url:'/payorderaddgames',
            data:{
                uid:1,
                gid:str[1],
                time:p_Date,
                ordernum:ordernum
            },
            success:function (res) {
                alert('购买成功')

            }
        })
    });
}

