/**
 * Created by Administrator on 2018/12/10.
 */

    $.ajax({
        url:'/wishload',
        success:function (res) {
            console.log(res.data.length);
            $('.left-bot .title-one span').html(res.data.length);
            $(res.data).each(function () {
                $('.left-bot').prepend(
                    `<div class="list" data-index="${this.m_id}"> 
                    <img src="${this.m_show}" alt="">
                    <a class="list-title"  href="#">${this.m_name}</a>
                    <div class="list-price"><span>￥${this.m_price}</span></div>
                    <button class="list-btn list_del">删除心愿</button>
                    <button class="list-btn list_shopCart">加入购物车</button>
                </div>`);



            })

            $('.list_del').on('click',function () {
                var obj=$(this);
                var id=$(this).parents().attr('data-index');
                $.ajax({
                    url:'/wishdel',
                    data:{id:id},
                    success:function (res) {
                        obj.parent().remove();

                    }
                })
            })
        $('.list_shopCart').on('click',function () {
        var id=$(this).parents().attr('data-index');
        $.ajax({
            url:'/wishadd',
            data:{uid:1,mid:id},
            success:function (res) {
                alert('ok');
            }
        });

    })
        } })

    $.ajax({
        url:'/wishgameload',
        success:function (res) {
            console.log(res.data.length);
            $('.left-bot .title-one span').html(res.data.length);
            $(res.data).each(function () {
                $('.left-bot').append(`<div class="list" data-index="${this.g_id}"> 
                    <img src="${this.p_Path1}" alt="">
                    <a class="list-title"  href="#">${this.g_name}</a>
                    <div class="list-price"><span>￥${this.g_price}</span></div>
                    <button class="list-btn list_del list_delgame">删除心愿</button>
                    <button class="list-btn list_shopCart list_shopCartgame">加入购物车</button>
                </div>`);



            });
              $('.list_delgame').on('click',function () {
                  var obj=$(this);
             var id=$(this).parents().attr('data-index');
             $.ajax({
             url:'/wishdelgame',
             data:{id:id},
             success:function (res) {
                obj.parent().remove();
             // window.location.reload();
             }
             })
             })
            $('.list_shopCartgame').on('click',function () {
                var id=$(this).parents().attr('data-index');
                $.ajax({
                    url:'/wishaddgame',
                    data:{uid:1,mid:id},
                    success:function (res) {
                    alert('ok');
                    }
                });

            })
        }
    });
