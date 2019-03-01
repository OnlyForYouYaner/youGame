/*获取用户ID*/
  /*
        var uid=$('#top-nav-login-ing').attr('data-id');
    */

    function gamesload() {
        $.ajax({
            url:'/shopcartgames',
            success:function (res) {
                // console.log(res);
                $(res.data).each(function () {
                    $('.round_games').prepend(
                        ` <div class="s-games" data="${this.g_id}">
                <input type="checkbox" class="s_choose m_games" name="game">
                <a href="#">
                    <img src="../../${this.p_Path1}" alt="">
                </a>
                <a href="javascript:;" class="s_gameName">${this.g_name}</a>

                <span class="s-money game-price">￥${this.g_price}.00</span>
                <div class="s-del">
                    <a href="javascript:;" class="del">删除</a>
                    <a href="javascript:;" class="add add-wishgame">加入心愿单</a>
                </div>
            </div>`);


                });
                /*添加到心愿单*/
                $('.s-del .add-wishgame').on('click',function () {
                    var gid=$(this).parent().parent().attr('data');
                    console.log(gid)
                    $.ajax({
                        url:'/shoppingcartgameadd',

                        data:{uid:1,gid:gid},
                        success:function (res) {
                            alert('已加入心愿单');

                        }
                    })
                });
                /*删除*/
                $('.s-del .del').on('click',function () {
                    var gid=$(this).parent().parent().attr('data');

                    $.ajax({
                        url:'/shopcartgamedel',
                        data:{gid:gid},
                        success:function (res) {
                            // $('.round_games').html('');
                            // gamesload();
                        }
                    })
                    $(this).parent().parent().remove();
                });

                $('.m_games').on('click',function () {
                    if($(this).is(':checked')){
                        var gid=$(this).parent().attr('data');
                        $.ajax({
                            url:'/shopcartcheckedg',
                            data:{id:gid},
                            success:function (res) {
                                $('.gameprice i span').html(Math.floor($('.gameprice i span').html())+Math.floor(res[0].g_price));
                            }
                        })
                    }else {
                        var gid=$(this).parent().attr('data');
                        $.ajax({
                            url:'/shopcartcheckedg',
                            data:{id:gid},
                            success:function (res) {

                                $('.gameprice i span').html(Math.floor($('.gameprice i span').html())-Math.floor(res[0].g_price));
                            }
                        })
                    };
                })
                $('.s_gameName').on('click',function () {
                    window.open('products.html?g_id='+$(this).parent().attr('data')+'')
                })
            }
        })
        /*全选*/
        $('#s-checkbox').on('click',function () {
            if($(this).is(':checked')){
                $.ajax({
                    url:'/shopcartgameall',
                    success:function (res) {
                        console.log(res);
                        $('.total .all .gameprice i span').html(res[0].g_sum);
                    }
                });
            }else {
                $('.total .all .gameprice  i span').html(0);
            }


        })

    }

 /*提交事件*/
 $('.total .submit').on('click',function () {
    if($('.shopcartgames').hasClass("active")){
        var arr=[];
        var oT=$(".goods  input[type='checkbox']");
        for (var i=0;i<oT.length;i++){
            if(oT.eq(i).prop('checked')){
                //获取购物车顺序ID
                arr.push(parseInt(oT.eq(i).parent().attr('data')));
            }
        }
        if (arr.length==0){
            Frame('请选择结算的物品');
            return
        }//判断有值没有


        var location='payone.html?';
        $.each(arr,function(i,v){
            location=location+'gameID='+v+'&';
        });//传入商品ID
        // location=location+'user='+1;
        // 存商品ID到地址栏
            window.location.href=location;

    }else{
            var arr=[];
            var oT=$(".goods  input[type='checkbox']");
            for (var i=0;i<oT.length;i++){
                if(oT.eq(i).prop('checked')){
                    //获取购物车顺序ID
                    arr.push(parseInt(oT.eq(i).parent().attr('data')));
                }
            }
            if (arr.length==0){
                Frame('请选择结算的物品');
                return
            }//判断有值没有
        var location='orderone.html?';
        $.each(arr,function(i,v){
            location=location+'shopID='+v+'&';
        });//传入商品ID
        // location=location+'user='+1;
        // 存商品ID到地址栏


        window.location.href=location;
    }


 })

    gamesload();

    $('button').click(function () {
        $('button').removeClass('active');
        $('section').removeClass('activ');
        $(this).addClass('active');
        $('section:eq('+$(this).index()+')').addClass('activ');
    });

//选中游戏
    $('#s-checkbox').click(function () {
        if (this.checked){
            $('[name="game"]:checkbox').prop('checked',true);
        }else {
            $('[name="game"]:checkbox').prop('checked',false);
        }
    });

    $('[name="game"]:checkbox').click(function(){
        var number=true;
        $('[name="game"]:checkbox').each(function(){
            if(!this.checked){
                number=false;
            }
        });
        $('#s-checkbox').prop('checked',number);
    });
    var num=1;

    function shopcartload() {

        $.ajax({
            url:"/shopcartload",
            success:function (res) {
                $(res.data).each(function () {
                    $('.round_goods').append(
                        ` <div data="${this.m_id}">
                <input type="checkbox" class="s_choose m-round" name="round">
                <a href="javascript:;">
                    <img src="../${this.m_show}" alt="">
                </a>
                <a href="javascript:;" class="s_gameName">${this.m_name}</a>
                
                <span class="s-mon">￥${this.m_price}.00</span>
                <div class="s-del">
                    <a href="javascript:;" class="del">删除</a>
                    <a href="javascript:;"  class="add">加入心愿单</a>
                </div>
            </div>`);


                });
                $('.s-del .del').on('click',function () {
                    var mid=$(this).parent().parent().attr('data');
                    console.log($(this).parent().parent());
                    $.ajax({
                        url:'/shopcartdel',
                        data:{mid:mid},
                        success:function (res) {
                            console.log(res.data);

                        }
                    })
                    $(this).parent().parent().remove();
                });
                $('.s-del .add').on('click',function () {
                    var mid=$(this).parent().parent().attr('data');
                    $.ajax({
                        url:'/shoppingcartadd',
                        data:{uid:1,mid:mid},
                        success:function (res) {
                            alert('已加入心愿单');
                            console.log(mid)
                        }
                    })
                });

                $('.s_gameName').on('click',function () {
                    window.open('shop.html?id='+$(this).parent().attr('data')+'','_self')
                })


                //选中周边
                $('#check').click(function () {
                    if (this.checked){
                        $('[name="round"]:checkbox').prop('checked',true);
                    }else {
                        $('[name="round"]:checkbox').prop('checked',false);
                    }
                });
                $('[name="round"]:checkbox').click(function(){
                    var number=true;
                    $('[name="round"]:checkbox').each(function(){
                        if(!this.checked){
                            number=false;
                        }
                    });
                    $('#check').prop('checked',number);
                })

                $('.m-round').on('click',function () {

                    if($(this).is(':checked')){
                        var mid=$(this).parent().attr('data');
                        $.ajax({
                            url:'/shopcartchecked',
                            data:{id:mid},
                            success:function (res) {

                                // console.log($('.right_input').val());

                                $('.pir i span').html(Math.floor($('.pir i span').html())+Math.floor(res[0].m_price));
                            }
                        })
                    }else {
                        var mid=$(this).parent().attr('data');
                        $.ajax({
                            url:'/shopcartchecked',
                            data:{id:mid},
                            success:function (res) {

                                $('.pir i span').html(Math.floor($('.pir i span').html())-Math.floor(res[0].m_price));
                            }
                        })
                    };
                })
            }
        })
    };


    $('.shopcartround').on('click',function () {
        $('.round_goods').html('');
        shopcartload();
    });

    $('#check').on('click',function () {
        if($(this).is(':checked')){
            $.ajax({
                url:'/shopcartall',
                success:function (res) {
                    $('.total .all .pir i span').html(res[0].m_sum);
                }
            });
        }else {
            $('.total .all .pir i span').html(0);
        }


    });
