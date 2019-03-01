function index() {
    /*第一行数据*/
    $.ajax({
        url:'/coverone',
        success:function (res) {
            for(var i=0;i<res.length;i++){
//                console.log(res[i].co_route);
                $('#round_box_one').append('<li class="first first-one"><a class="r_img"><img src="../'+res[i].co_route+'" alt=""><button>查看全部</button> </a></li>')
            }
            $('.first-one').on('click',function () {
                var str='怪物猎人世界';
                $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
                $('.r_brand a').removeClass('a-active');
                $('.r_game a').removeClass('a-active');
                $('.tag-one').addClass('a-active').siblings().removeClass('a-active');
                $('input').removeClass('active');
                $.ajax({
                    url:'/roundmore',
                    data:{tage:str},
                    success:function (res) {
                        $('.r-title input').removeClass('active');
                        $('#limi').html('');
                        for(var i=0;i<res.length;i++){
                            $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#limi .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                        $('#hot').html('');
                        for(var i=0;i<res.length;i++){
                            $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                    }
                })

            })

        }

    });
    $.ajax({
        url:'/roundindex',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#round_box_one').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="photo"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#round_box_one .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }

    });
    /*第二行数据*/
    $.ajax({
        url:'/duku',
        success:function (res) {
            for(var i=0;i<res.length;i++){

                $('#round_box_two').append('<li class="first first-two"><a href="#" class="r_img"><img src="../'+res[0].co_route+'" alt=""><button>查看全部</button> </a></li>')
            }
            $('.first-two').on('click',function () {
                var str='读库';
                $('.r_brand a').removeClass('a-active');
                $('.r_game a').removeClass('a-active');
                $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
                $('.tag-six').addClass('a-active').siblings().removeClass('a-active');
                $('input').removeClass('active');
                $.ajax({
                    url:'/roundmore',
                    data:{tage:str},
                    success:function (res) {
                        $('.r-title input').removeClass('active');
                        $('#limi').html('');
                        for(var i=0;i<res.length;i++){
                            $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#limi .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                        $('#hot').html('');
                        for(var i=0;i<res.length;i++){
                            $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                    }
                })

            })
        }
    });
    $.ajax({
        url:'/two',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#round_box_two').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="photo"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#round_box_two .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    });
    /*第三行数据*/
    $.ajax({
        url:'/people',
        success:function (res) {
            for(var i=0;i<res.length;i++){

                $('#round_box_three').append('<li class="first first-three"><a href="#" class="r_img"><img src="../'+res[0].co_route+'" alt=""><button>查看全部</button> </a></li>')
            }
            $('.first-three').on('click',function () {
                var str='怪物猎人XX';
                $('.r_brand a').removeClass('a-active');
                $('.r_game a').removeClass('a-active');
                $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
                $('.tag-two').addClass('a-active').siblings().removeClass('a-active');
                $('input').removeClass('active');
                $.ajax({
                    url:'/roundmore',
                    data:{tage:str},
                    success:function (res) {
                        $('.r-title input').removeClass('active');
                        $('#limi').html('');
                        for(var i=0;i<res.length;i++){
                            $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        });
                        $('#hot').html('');
                        for(var i=0;i<res.length;i++){
                            $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        });
                    }
                })

            })
        }
    });
    $.ajax({
        url:'/three',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#round_box_three').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="photo"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#round_box_three .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    });
    /*第四行数据*/
    $.ajax({
        url:'/four',
        success:function (res) {
            for(var i=0;i<res.length;i++){

                $('#round_box_four').append('<li class="first first-four"><a href="#" class="r_img"><img src="../'+res[0].co_route+'" alt=""><button>查看全部</button> </a></li>')
            }
            $('.first-four').on('click',function () {
                var str='生化危机';
                $('.r_brand a').removeClass('a-active');
                $('.r_game a').removeClass('a-active');
                $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
                $('.tag-three').addClass('a-active').siblings().removeClass('a-active');
                $('input').removeClass('active');
                $.ajax({
                    url:'/roundmore',
                    data:{tage:str},
                    success:function (res) {
                        $('.r-title input').removeClass('active');
                        $('#limi').html('');
                        for(var i=0;i<res.length;i++){
                            $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#limi .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        });
                        $('#hot').html('');
                        for(var i=0;i<res.length;i++){
                            $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        });
                    }
                })

            })
        }
    });
    $.ajax({
        url:'/dange',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#round_box_four').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="photo"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#round_box_four .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    });
    /*第五行数据*/
    $.ajax({
        url:'/five',
        success:function (res) {
            for(var i=0;i<res.length;i++){

                $('#round_box_five').append('<li class="first first-five"><a href="#" class="r_img"><img src="../'+res[0].co_route+'" alt=""><button>查看全部</button> </a></li>')
            }
            $('.first-five').on('click',function () {
                var str='北通游戏手柄';
                $('.r_brand a').removeClass('a-active');
                $('.r_game a').removeClass('a-active');
                $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
                $('.tag-four').addClass('a-active').siblings().removeClass('a-active');
                $('input').removeClass('active');
                $.ajax({
                    url:'/roundmore',
                    data:{tage:str},
                    success:function (res) {
                        $('.r-title input').removeClass('active');
                        $('#limi').html('');
                        for(var i=0;i<res.length;i++){
                            $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#limi .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                        $('#hot').html('');
                        for(var i=0;i<res.length;i++){
                            $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                    }
                })

            })
        }
    });
    $.ajax({
        url:'/handle',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#round_box_five').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="photo"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#round_box_five .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    });
    /*第六行数据*/
    $.ajax({
        url:'/six',
        success:function (res) {
            for(var i=0;i<res.length;i++){

                $('#round_box_six').append('<li class="first first-six"><a href="#" class="r_img"><img src="../'+res[0].co_route+'" alt=""><button>查看全部</button> </a></li>')
            }
            $('.first-six').on('click',function () {
                var str='微软中国';
                $('.r_brand a').removeClass('a-active');
                $('.r_game a').removeClass('a-active');
                $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
                $('.tag-five').addClass('a-active').siblings().removeClass('a-active');
                $('input').removeClass('active');
                $.ajax({
                    url:'/roundmore',
                    data:{tage:str},
                    success:function (res) {
                        $('.r-title input').removeClass('active');
                        $('#limi').html('');
                        for(var i=0;i<res.length;i++){
                            $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#limi .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                        $('#hot').html('');
                        for(var i=0;i<res.length;i++){
                            $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
                        }
                        $('#hot .shop').on('click',function () {
                            var id=$(this).attr('data-id');
                            window.open('shop.html?id='+id+'','_self');
                        })
                    }
                })

            })
        }
    });
    $.ajax({
        url:'/soft',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#round_box_six').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="photo"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#round_box_six .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    });

};
index();
$('#tab_two').click(function () {
    $('#hot').html('');
    $('.r_brand a').removeClass('a-active');
    $('.r_game a').removeClass('a-active');
    $.ajax({
        url:'/hot',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#hot .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }

    });
});
$('#tab_three').click(function () {
    $('#limi').html('');
    $('.r_brand a').removeClass('a-active');
    $('.r_game a').removeClass('a-active');
    $.ajax({
        url:'/limi',
        success:function (res) {
            for(var i=0;i<res.length;i++){
                $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#limi .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }

    });
});
$('.r_brand a').on('click',function () {
    $(this).addClass('a-active').siblings().removeClass('a-active');
    var str=$(this).html();

    $.ajax({
        url:'/roundbrand',
        data:{brand:str},
        success:function (res) {
            $('.r-title input').removeClass('active');
            $('#limi').html('');
            for(var i=0;i<res.length;i++){
                $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#limi .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
            $('#hot').html('');
            for(var i=0;i<res.length;i++){
                $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#hot .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    })
})

//    $('.r_brand a').click(function () {
//
//    });
$('.r_game a').on('click',function () {
    $(this).addClass('a-active').siblings().removeClass('a-active');
    var tag=$(this).html();
    $.ajax({
        url:'/roundtag',
        data:{tag:tag},
        success:function (res) {
            $('.r-title input').removeClass('active');
            $('#limi').html('');
            for(var i=0;i<res.length;i++){
                $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#limi .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
            $('#hot').html('');
            for(var i=0;i<res.length;i++){
                $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#hot .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    })
});
$('.r_type a').on('click',function () {
    $(this).addClass('a-active').siblings().removeClass('a-active');
    var type=$(this).html();
    $.ajax({
        url:'/roundtype',
        data:{type:type},
        success:function (res) {
            $('.r-title input').removeClass('active');
            $('#limi').html('');
            for(var i=0;i<res.length;i++){
                $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#limi .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
            $('#hot').html('');
            for(var i=0;i<res.length;i++){
                $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#hot .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    })
});

$('.more').click(function () {
    var str=$(this).prev().html();
    $('section:eq(1)').addClass('activ').siblings().removeClass('activ');
    $('input').removeClass('active');
    $.ajax({
        url:'/roundmore',
        data:{tage:str},
        success:function (res) {
            $('.r-title input').removeClass('active');
            $('#limi').html('');
            for(var i=0;i<res.length;i++){
                $('#limi').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#limi .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
            $('#hot').html('');
            for(var i=0;i<res.length;i++){
                $('#hot').append('<li data-id="'+res[i].m_id+'" class="shop"> <a href="#" class="r_product"> <img src="../'+res[i].m_show+'" alt="" class="r_picture"> <h1 class="title" title="'+res[i].m_name+'">'+res[i].m_name+'</h1> <p><span>￥</span>'+res[i].m_price+'</p> </a> </li>')
            }
            $('#hot .shop').on('click',function () {
                var id=$(this).attr('data-id');
                window.open('shop.html?id='+id+'','_self');
            })
        }
    })
})

var oLeft=document.querySelector('.left');
var oRight=document.querySelector('.right');
var oDiv=document.querySelector('#box');

oDiv.onmouseenter=function () {
    oLeft.style.display='block';
    oRight.style.display='block';
};
oDiv.onmouseleave=function () {
    oLeft.style.display='none';
    oRight.style.display='none'
};

var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000,//可选选项，自动滑动
    autoplayDisableOnInteraction : false,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop:true
});

$('input').click(function () {
    $('input').removeClass('active');
    $('section').removeClass('activ');
    $(this).addClass('active');
    $('section:eq('+$(this).index()+')').addClass('activ');
});