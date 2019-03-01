var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000,//可选选项，自动滑动
    autoplayDisableOnInteraction : false,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop:true
});


var str=window.location.search.substr(1).split('=');
var gameId=str[1];
var UID=1;
function game() {
    $.ajax({
        url:'/product',
        data: {
            ID:gameId
        },
        success:function (res) {
            if(!res.error){
                $('.game-special-bg').css('background-image',"url("+res.data[0].p_Path1+")");
                $('.p-name').html(res.data[0].g_name);
                $('.p-en-name').html(res.data[0].g_en_name);
                $('.swiper-slide-img1').attr('src',res.data[0].p_Path3);
                $('.swiper-slide-img2').attr('src',res.data[0].p_Path4);
                $('.swiper-slide-img3').attr('src',res.data[0].p_Path5);
                $('.swiper-slide-img4').attr('src',res.data[0].p_Path6);
                $('.swiper-slide-img5').attr('src',res.data[0].p_Path7);
                $('.game-introduction-content p').html(res.data[0].g_Introduction);
                $('#sys-sys').html(res.data[0].g_system);
                $('#sys-mem').html(res.data[0].g_memory);
                $('#sys-pro').html(res.data[0].g_processor);
                $('#sys-dx').html(res.data[0].g_directX);
                $('#sys-ima').html(res.data[0].g_image);
                $('#sys-dk').html(res.data[0].g_disk);
                $('#sys-sc').html(res.data[0].g_soundcard);
                $('.brief-info').html(res.data[0].g_Int);
                $('.sale-price').html('￥'+res.data[0].g_price);
                $('.publish-name-dev').html(res.data[0].g_developer);
                $('.publish-name-pub').html(res.data[0].g_publisher);
                $('.publish-name-time').html(res.data[0].g_time.split('T')[0]);
                $('.game-copyright p').html(res.data[0].g_copy);
                $.ajax({
                    url:'/gameType',
                    data: {
                        Id:gameId
                    },
                    success:function (res) {
                        $(res.data).each(function () {
                            $('.tag-list').append(`<li><a href="">${this.t_type}</a></li>`);
                        })
                    }
                });
                $.ajax({
                    url:'/gameLanguage',
                    data: {
                        Id:gameId
                    },
                    success:function (res) {
                        $(res.data).each(function () {
                            $('.publish-name-lag').append(`<a href="" class="usual-info-content">${this.L_language}</a>`);
                        })
                    }
                });
                $.ajax({
                    url:'/gameSys',
                    data: {
                        Id:gameId
                    },
                    success:function (res) {
                        $(res.data).each(function () {
                            $('.publish-name-os').append(`<a href="" class="usual-info-content">${this.o_os}</a>`);
                        })
                    }
                });


            }
        }
    })
}

function gameHotRe() {
    $.ajax({
        url:'/gameHotRe',
        data: {
            Id:gameId
        },
        success:function (res) {
            $(res.data).each(function () {
                $('.player-evaluation-left').append(` <div class="list-item" data-id="${this.m_id}" id="${this.m_id}">
                    <div class="leftCol">
                        <a href="" class="user-head"><img src="https://media.st.dl.bscstorage.net/steamcommunity/public/images/avatars/61/614c9dc1af2e8dd9e3df39320d5efa51f4e013a3.jpg" alt=""></a>
                        <div>
                            <a href="" class="user-name">JOJO</a>
                            <p  class="num-games">帐户内拥有2款游戏</p>
                        </div>
                    </div>
                    <div class="rightCol">
                        <p class="rightCol-score">${this.m_score} <span class="rightCol-stars">
                                <!--<span class="glyphicon glyphicon-star"></span>-->
                                <!--<span class="glyphicon glyphicon-star"></span>-->
                                <!--<span class="glyphicon glyphicon-star"></span>-->
                                <!--<span class="glyphicon glyphicon-star"></span>-->
                                <!--<span class="glyphicon glyphicon-star"></span>-->    
                            </span></p>
                        <p class="rightCol-time">发布于${this.m_date.split('T')[0]}</p>
                        <p class="rightCol-content">${this.m_message}</p>
                        <div>
                            <button class="btn thumbs-up"><span class="glyphicon glyphicon-thumbs-up"></span>${this.m_give}</button>
                            <button class="btn user-reply"><span class="glyphicon glyphicon-thumbs-down"></span>${this.m_step}</button>
                        </div>
                    </div>
                </div>`);
                var a=this.m_id;
                $.ajax({
                    url:'/gameMeU',
                    data: {
                        Id:this.u_id
                    },
                    success:function (res) {
                        $( "#"+a+" .user-head img").attr('src',res.data[0].u_photo);
                        $( "#"+a+" .user-name").html(res.data[0].u_nickName);
                    }
                });
                $.ajax({
                    url:'/gameMeN',
                    data: {
                        Id:this.u_id
                    },
                    success:function (res) {
                        $( "#"+a+" .num-games").html('帐户内拥有'+res.data[0].num+'款游戏');
                    }
                })
            });
            $('.player-evaluation .thumbs-up').on('click','',function () {
                var mid=$(this).parent().parent().parent().attr('id');
                console.log(mid);
                $.ajax({
                    url:'/thumbsUp',
                    data:{Id:mid},
                    success:function (res) {
                    }
                });
                var a=parseFloat($(this).text())+1;
                $(this).html(`<span class="glyphicon glyphicon-thumbs-up"></span>${a}`).css('color','#FF4E6C');

            });
            $('.player-evaluation .user-reply').on('click','',function () {
                var mid=$(this).parent().parent().parent().attr('id');
                console.log(mid);
                $.ajax({
                    url:'/thumbsDown',
                    data:{Id:mid},
                    success:function (res) {
                    }
                });
                var a=parseFloat($(this).text())+1;
                $(this).html(`<span class="glyphicon glyphicon-thumbs-down"></span>${a}`).css('color','#3d70ff');

            });

        }
    });
    $.ajax({
        url:'/gameSelWish',
        data:{
            UID:UID,
            GID:gameId
        },
        success:function (res) {
            if(res.error){
                $('.add-wish').html(`<span class="glyphicon glyphicon-heart-empty"></span>加入心愿单`).css('color','#7a80a2')
            }else {
                $('.add-wish').html(`<span class="glyphicon glyphicon-heart-empty"></span>已加入心愿单`).css('color','#ff6900')
            }
        }
    })
}
function gameNewRe(){
    $.ajax({
        url:'/gameNewRe',
        data: {
            Id:gameId
        },
        success:function (res) {
            $(res.data).each(function () {
                $('.player-evaluation-right').append(`<div class="latest-reply" data-id="${this.m_id}" id="${this.m_id}g">
                    <div class="clearfix">
                        <p class="latest-reply-score">${this.m_score}</p>
                        <a href="" class="latest-reply-name">DIO</a>
                    </div>
                    <p class="latest-reply-time">发布于${this.m_date.split('T')[0]}</p>
                    <p class="latest-reply-content">${this.m_message}</p>
                    <div class="latest-reply-op">
                        <button class="btn thumbs-up"><span class="glyphicon glyphicon-thumbs-up"></span>${this.m_give}</button>
                        <button class="btn user-reply"><span class="glyphicon glyphicon-thumbs-down"></span>${this.m_step}</button>
                    </div>
                </div>`);
                var a=this.m_id;
                $.ajax({
                    url:'/gameMeU',
                    data: {
                        Id:this.u_id
                    },
                    success:function (res) {
                        $( "#"+a+"g .latest-reply-name").html(res.data[0].u_nickName);
                    }
                });
            });
        }
    })
}
game();
gameHotRe();
gameNewRe();

$('.add-cart').on('click',function () {
    $.ajax({
        url:'/gameAddCart',
        data:{
            UID:UID,
            GID:gameId
        },
        success:function (res) {
            $('.modal-title').html(res.data)
        }
    })
});
$('.add-wish').on('click',function () {
    $.ajax({
        url:'/gameAddWish',
        data:{
            UID:UID,
            GID:gameId
        },
        success:function (res) {
            if(res.error){
                $('.add-wish').html(`<span class="glyphicon glyphicon-heart-empty"></span>加入心愿单`).css('color','#7a80a2')
            }else {
                $('.add-wish').html(`<span class="glyphicon glyphicon-heart-empty"></span>已加入心愿单`).css('color','#ff6900')
            }
        }
    })
});
$('#btn-purchase').on('click',function () {
    window.open('pay.html?id='+gameId+'')
});
$('#release').on('click',function () {
    var a=document.querySelector('.fen select').value;
    var b=document.querySelector('.div2 textarea').value;
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
    var timer=y+'-'+Appendzero(mon)+'-'+Appendzero(d);
    $.ajax({
        url:'/addMessage',
        data:{
            UID:UID,
            GID:gameId,
            fen:a,
            nei:b,
            t:timer
        },
        success:function (res) {
            document.querySelector('.div2 textarea').value='';
            document.querySelector('.fen select').value=1;
            $('.latest-reply').remove();
            gameNewRe();
        }
    })
});
function score() {
    $.ajax({
        url:'/AScore',
        data:{
            GID:gameId
        },
        success:function (res) {
            console.log(res.data[0].score);

            $('.score').html(res.data[0].score)
        }
    })
}
score();
