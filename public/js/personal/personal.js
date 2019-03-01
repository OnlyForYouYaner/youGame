$('.y-choice ul li').click(function () {
    $('.y-choice ul li').removeClass('active');
    $('.y-choice ol li').removeClass('active');
    $('.y-middle > div').removeClass('active');
    $(this).addClass('active');
    //$('div').eq($(this).index()).addClass('active');
    $('.y-choice ol li:eq('+$(this).index()+')').addClass('active');
    $('.y-middle > div:eq('+$(this).index()+')').addClass('active');
});
$('.y-btn > div').click(function () {
    $('.y-btn  div > p').removeClass('active');
    $('.y-btn-div > div').removeClass('active');
    $(this).addClass('active');
    //$('div').eq($(this).index()).addClass('active');
    $('.y-btn  div > p:eq('+$(this).index()+')').addClass('active');
    $('.y-btn-div > div:eq('+$(this).index()+')').addClass('active');
});
// var b=window.location.search.substr(1).split('=')[1];
var a=window.location.search.substr(1).split('=')[1];
function centerLnformation(){
    $.ajax({
        url:'/centerLnformation',
        data:{a},
        success:function (res) {
            $('.y-batten').append('<div class="y-img">' +
                '<img src="'+res[0].u_photo+'" alt="">' +
                '</div>'+
                '<div class="y-introduce">'+
                '<h2>'+res[0].u_nickName+'</h2>'+
                '<p>个人签名:'+res[0].u_atuograph+'</p>'+
                '<p class="p1">游戏数:'+res.length+'</p>'+
                '</div>');
        }
    });
}
centerLnformation();
function centerGame(){
    $.ajax({
        url:'/centerGame',
        data:{a},
        success:function (res) {
            $('.y-game').html('');
            if(res.data.length==0){
                $('.y-game').append('<div class="y-nogame">\n' +
                    '                    <p>你还没有游戏哟～～</p>\n' +
                    '                </div>')
            }else {
                for (var i=-1;i<=res.data.length;i++){
                    $('.y-game').append('<div class="y-yesgame '+res.data[i+1].g_id+'" data-id="'+res.data[i+1].g_id+'">' +
                        '<div class="y-img">' +
                        '<div>' +
                        //'+res[i].p_Path2+'
                        '<img src="http://localhost:8081/images/personal/2.jpg" alt="">' +
                        '</div>' +
                        '<div>' +
                        '<h4>'+res.data[i+1].g_name+'</h4>' +
                        '</div>' +
                        '</div>' +
                        '<div class="y-details">' +
                        '<div>' +
                        '<span>去往游戏</span>' +
                        '</div>' +
                        '</div>' +
                        '</div>');
                    var b=res.data[i+1].g_id;
                    $('.y-game').on('click','.'+b,function () {
                        var OID=$(this).attr('data-id');
                        window.open('products.html?g_id='+OID+'')
                    })
                }

            }
        }
    });
}
centerGame();
$('.l1').click(function () {
    $('.y-game').html('');
    centerGame()
});
$('.l2').click(function () {
        $.ajax({
            url:'/centerGroup',
            data:{a},
            success:function (res) {
                $('.y-group').html('');
                if(res.length==0){
                    $('.y-group').append('<div class="y-nogroup">\n' +
                        '                    <p>你还没有游戏哟～～</p>' +
                        '<button>前往U圈</button>' +
                        '</div>')
                    $('.y-group').on('click','button', function () {
                        window.open('community.html?u_id='+a+'')
                    })
                }else {
                    $.each(res,function () {
                        $('.y-group').append('<div class="y-yesgroup" data-id="'+this.a_id+'" id="'+this.a_id+'">\n' +
                            '                    <div class="y-img">\n' +
                            '                        <div>\n' +
                            '                             <img src="'+this.a_image+'" alt="">\n' +
                            '                        </div>\n' +
                            '                        <div>\n' +
                            '                            <h4>'+this.a_name+'</h4>\n' +
                            '                        </div>\n' +
                            '                    </div><div class="y-details"></div></div>');
                        var b=this.a_id;
                        $.ajax({
                            url:'/Total',
                            data:{id:b},
                            success:function (res) {
                                $('.y-group #'+b+' .y-details').append('<div><span>'+res.length+'</span><p>成员</p></div>');
                            }
                        });

                        $.ajax({
                            url:'/Posts',
                            data:{id:b},
                            success:function (res) {
                                $('.y-group #'+b+' .y-details').append('<div><span>'+res.length+'</span><p>主题</p></div><div><button>去往小组</button></div>');
                            }
                        });
                        $('.y-group').on('click','#'+b,function () {
                            var OID=$(this).attr('data-id');
                            window.open('officialDetails.html?a_id='+OID+'')
                        })
                    });
                }

            }
        })
    });
$('.l3').click(function () {
    $('.y-collection').on('click','button', function () {
        window.open('community.html?u_id='+a+'')
    });
    $.ajax({
        url:'/centerCollection',
        data:{a},
        success:function (res) {
            if(res.length==0){
                $('.y-content').append('<div class="y-nocollection">\n' +
                    '                    <p>请去U帖留下你的足迹～～</p>' +
                    '<button>前往U圈</button>' +
                    '</div>')
            }else {
                $('.y-content').append('<div class="y-img">' +
                    '<img src="'+res[0].u_photo+'" alt="">' +
                    '</div>'+
                    '<div class="y-introduce">'+
                    '<h2>'+res[0].u_nickName+'</h2>'+
                    '<p>个人签名:'+res[0].u_atuograph+'</p>'+
                    '<p class="p1">游戏数:'+res.length+'</p>'+
                    '</div>');
            }
        }
    });
});
$('.l4').click(function () {
    $.ajax({
        url:'/centerPost',
        data:{a},
        success:function (res) {
            $('.y-post .screen').html('');
            if(res.length==0){
                $('.y-post .screen').append('<div class="y-nocollection">\n' +
                    '                    <p>请去U帖留下你的足迹～～</p>' +
                    '<button>前往U圈</button>' +
                    '</div>');
                $('.y-post .screen').on('click','button', function () {
                    window.open('community.html?u_id='+a+'')
                })
            }else {
                $.each(res,function () {
                    $('.y-post .screen').append('<div class="y-content '+this.p_id+'" data-id="'+this.p_id+'">' +
                        '<h4>'+this.p_text+'</h4>' +
                        '<p>'+this.p_message+'</p>' +
                        '<div class="y-personal">' +
                        '<img src="'+this.u_photo+'" alt="">' +
                        '<span>'+this.u_nickName+'</span>' +
                        '<span>'+this.p_date+'发布</span>' +
                        '<span class="y-reply">回复&nbsp;&nbsp;0</span>' +
                        '<span class="y-give">' +
                        '<i class="icon iconfont icon-dianzan">&nbsp;&nbsp;'+this.p_fabulous+'</i>' +
                        '</span>' +
                        '</div></div>');
                    var b=this.p_id;
                    $('.y-post .screen').on('click','.'+b,function () {
                        var OID=$(this).attr('data-id');
                        window.open('Utie.html?p_id='+OID+'')
                    })
                })
            }
        }
    });
});
$('.l5').click(function () {
    $.ajax({
        url: '/centerComment',
        data: {a},
        success: function (res) {
            $('.y-comment .comment').html(' ');
            if (res.length == 0) {
                $('.y-comment .comment').append('<div class="y-nocomment">\n' +
                    '                    <p>请去U帖留下你的足迹～～</p>' +
                    '<button>前往U圈</button>' +
                    '</div>')
                $('.y-comment .comment').on('click','button', function () {
                    window.open('community.html?u_id='+a+'')
                })
            } else {
                $.each(res, function () {
                    $('.y-comment .comment').append('<div class="y-yescomment ' + this.g_id + '" data-id="'+this.g_id+'"><div' +
                        ' class="y-content"' +
                        ' data-id="' + this.m_id + '">' +
                        '<h4>' + this.g_name + '</h4>' +
                        '<p>' + this.m_message + '</p>' +
                        '<div class="y-personal">' +
                        '<img src="' + this.u_photo + '" alt="" data-id="'+this.u_id+'">' +
                        '<span>' + this.u_nickName + '</span>' +
                        '<span>' + this.m_date+ '发布</span>' +
                        '<span class="y-reply">踩一踩&nbsp;&nbsp;' + this.m_step + '</span>' +
                        '<span class="y-give">' +
                        '<i class="icon iconfont icon-dianzan">&nbsp;&nbsp;' + this.m_give + '</i>' +
                        '</span>' +
                        '</div></div></div>');
                    var b = this.g_id;
                    $('.y-comment .comment').on('click','.'+b+' h4', function () {
                        var OID=$(this).parent().attr('data-id');
                        window.open('products.html?g_id=' +OID+ '')
                    })
                    $('.y-comment .comment').on('click','.'+b+' img', function () {
                        var OID=$(this).attr('data-id');
                        window.open('personal.html?u_id=' +OID+ '')
                    })
                });

            }
        }
    })
});
$('.l6').click(function () {
    discuss();
    function discuss(){
        $.ajax({
            url:'/centerSelection',
            data:{a},
            success:function (res) {
                $('.y-btn-div').html('');
                if(res.length==0){
                    $('.y-discuss .y-btn-div').append('<div class="y-btn-div"><div class="y-nodiscuss">' +
                        '<p class="p1">请去U帖留下你的足迹～～</p>' +
                        '<button>前往U圈</button>' +
                        '</div></div>');
                    $('.y-btn-div').on('click','button', function () {
                        window.open('community.html?u_id='+a+'')
                    })
                }else {
                    $.each(res,function () {
                        $('.y-discuss .y-btn-div').append('<div class="y-yesdiscuss '+this.p_id+'" data-id="'+this.p_id+'">' +
                            '<div class="y-content"><h4>'+this.p_text+'</h4>' +
                            '<div class="y-personal"><p>“'+this.p_message+'”</p>' +
                            '<span class="y-day">'+this.p_date+'发布</span>' +
                            '</div></div></div>');
                        var b = this.p_id;
                        $('.y-discuss .y-btn-div').on('click', '.'+ b, function () {
                            var OID=$(this).attr('data-id');
                            window.open('Utie.html?g_id=' +OID+ '')
                        })
                    })
                }

            }
        });
    }
    $('.y-div1').click(function () {
        discuss();
    });
    // $('.y-div2').click(function () {
    //     $.ajax({
    //         url:'/centerReply',
    //         data:{a},
    //         success:function (res) {
    //             $('.y-btn-div').html('');
    //             $.each(res,function () {
    //                 $('.y-discuss .y-btn-div').append('<div class="y-yesdiscuss">' +
    //                     '<div class="y-content"><h4>回复：托儿所</h4>' +
    //                     '<div class="y-personal"><span>“我命由我不由天......”</span>' +
    //                     '<span class="y-day">2018-09-17 19:06:53发布</span>' +
    //                     '<p>马超那件数据</p>' +
    //                     '</div></div></div>');
    //             })
    //         }
    //     });
    // })
    $('.y-div2').click(function () {
        $('.y-btn-div').html('');
        $('.y-discuss .y-btn-div').append('<div class="y-btn-div"><div class="y-nodiscuss">' +
            '<p class="p1">请去U帖留下你的足迹～～</p><' +
            'button>前往U圈</button>' +
            '</div></div>');
        $('.y-btn-div').on('click','button', function () {
            window.open('community.html?u_id='+a+'')
        })
    })
});
