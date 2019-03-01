
//U帖id
var b=window.location.search.substr(1).split('=')[1];
//用户Id
var a=1;
//U帖内容
function content() {
    $.ajax({
        url:'/content',
        data:{b},
        success:function (res) {
            $('.content').html('');
            $('.content').html('');
                $('.content').append('<div class="post-header">' +
                    '<h1>'+res[0].p_text+'</h1></div>' +
                    '<div class="post-detail clearfix">' +
                    '<div class="post-time">发表于'+res[0].p_date.split('T')[0]+'</div>' +
                    '<div class="btn-wrapper"><button class="repost">' +
                    '<i class="iconfont icon-zan"></i>'+res[0].p_fabulous+'</button>' +
                    '</button></div></div><div class="post-content">' +
                    '<p>'+res[0].p_message+'</p></div><div class="post-box">' +
                    '<div class="post-thumb-up "><p class="p1"><i class="iconfont icon-zan"></i></p>' +
                    '<p class="p2">'+res[0].p_fabulous+'</p></div></div>' +
                    '<div class="share">\n' +
                    '            <div class="share-left">\n' +
                    '                <i class="iconfont icon-jubao"></i> <span>举报 </span>\n' +
                    '            </div>\n' +
                    '            <div class="midle">\n' +
                    '                <div><i class="iconfont icon-weixin"></i></div>\n' +
                    '                <div><i class="iconfont icon-changyonglogo29"></i></div>\n' +
                    '                <div> <i class="iconfont icon-qq"></i></div>\n' +
                    '                <div><i class="iconfont icon-shoucang"></i></div>\n' +
                    '            </div>\n' +
                    '            <div class="right">' +
                                    '<div>\n' +
                    '        </div>');
            $('.content').on('click','.post-thumb-up',function () {

                let ms=res[0].p_fabulous;
                let ma=ms+1;
                $.ajax({
                    url:'/GiveTheThumbsUp',
                    data:{b,ms,ma},
                    success:function (res) {
                        content();

                    }
                })
            });
        }
    });
    $.ajax({
        url:'/y_Collection',
        data:{b},
        success:function (res) {
            let num=res.length;
            $.ajax({
                url:'/y_CollectionYes',
                data:{b,a},
                success:function (res) {
                    $('.right').empty();
                    if(res.length>0){
                        $('.right').append('' +
                            '                    <i class="iconfont icon-shoucang1" style="color: #FF6900"></i>\n' +
                            '                               <span>'+num+'</span>' +
                            '');

                        $('.right').on('click','i',function () {
                            $.ajax({
                                url:'/y_CollectionY',
                                data:{b,a},
                                success:function (res) {
                                    // $('.content').empty();
                                    $('.content').html();
                                    content();

                                }
                            })
                        })
                    }else {
                        $('.right').append('' +
                            '  <i class="iconfont icon-shoucang1"></i>\n' +
                            '  <span>'+num+'</span>' +
                            '');
                        $('.right').on('click','i',function () {
                            $.ajax({
                                url:'/y_CollectionN',
                                data:{b,a},
                                success:function (res) {
                                    // $('.content').empty();
                                    $('.content').html();
                                    content();

                                }
                            })
                        })
                    }

                }
            });


        }
    })
}

content();
//发布该帖子用户信息
function center2(){
    $.ajax({
        url:'/PersonalInformation',
        data:{b},
        success:function (res) {
            $('.right-box .right-top').append('<img data-id="'+res[0].u_id+'" src="'+res[0].u_photo+'" height="100" width="100"/>' +
                '<div class="right-top2"><p class="name1" data-id="'+res[0].u_id+'">'+res[0].u_nickName+'</p>' +
                '<p class="name2" title="个性签名个性签名个性签名性签">'+res[0].u_atuograph+'</p>' +
                '<span>游戏数：</span><span>'+res.length+'</span</div>');

                $('.right-box .right-top').on('click','.name1' ,function () {
                    var a_id=$(this).attr('data-id');
                    window.open('personal.html?id='+a_id+'','_self');
            });
            $('.right-box .right-top').on('click','img' ,function () {
                var a_id=$(this).attr('data-id');
                window.open('personal.html?id='+a_id+'','_self');
            })
        }
    });
}
center2();
//用户头像
function center3(){
    $.ajax({
        url:'/centerLnformation',
        data:{a},
        success:function (res) {
            $('.submit-ping .div1').append('<img src="'+res[0].u_photo+'" height="50" width="50">');
        }
    });
}
center3();
//帖子所在小组详情
function center4(){
    $.ajax({
        url:'/GroupNameOne',
        data:{b},
        success:function (res) {
            $.each(res,function (){
                $('.top').append('<img src="'+this.a_image+'" alt="" id="a2">\n' +
                    '            <div>\n' +
                    '                <span>'+this.a_name+'\n' +
                    '                    <i class="iconfont icon-shoucang"></i>\n' +
                    '                    <i class="iconfont icon-shoucang"></i>\n' +
                    '                    <i class="iconfont icon-shoucang"></i>\n' +
                    '                    <i class="iconfont icon-shoucang"></i>\n' +
                    '                    <i class="iconfont icon-shoucang"></i>\n' +
                    '                </span><br>\n' +
                    '            </div>');
                var id=this.a_id;
                $.ajax({
                    url:'/Total',
                    data:{id:id},
                    success:function (res) {
                        $('.top div').append('玩家数：<span>'+res.length+'</span>&nbsp;&nbsp;');
                    }
                });
                $.ajax({
                    url:'/Posts',
                    data:{id:id},
                    success:function (res) {
                        $('.top div').append('主题：<span>'+res.length+'</span>&nbsp;&nbsp;');
                    }
                });
                $('.top').on('click','#a2' ,function () {
                    var a_id=id;
                    window.open('officialDetails.html?id='+a_id+'','_self');
                });
                //关注
                // $.ajax({
                //     url:'/Follow',
                //     data:{a},
                //     success:function (res) {
                //         $('.top div').append('主题：<span>'+res.length+'</span>&nbsp;&nbsp;');
                //     }
                // });
            })
        }
    });
}
center4();
//该帖子留言详情
function center5(){
    $.ajax({
        url:'/LeavingAmessage',
        data:{b},
        success:function (res) {
            $('.u-bottom').empty();
            $.each(res,function () {
                $('.u-bottom').append('<div class="u-leaving">' +
                    '<div class="u-img"><img src="'+this.u_photo+'"></div>' +
                    '<div class="u-name"><p>'+this.u_nickName+'&nbsp;&nbsp;&nbsp;<span>发布于'+this.pm_date+'</span></p>' +
                    '<p>'+this.pm_message+'</p><span class="u-delete"  data-id="'+this.pm_id+'">删除</span>' +
                    '<span class="repost"  data-id="'+this.pm_id+'"  data-index="'+this.pm_give+'"><i class="iconfont icon-zan"></i><span' +
                    ' class="y_num"">'+this.pm_give+'</span></span>' +
                    '</div></div>');

            });

        }
    });
}
center5();
//小组
function center6(){
    $.ajax({
        url:'/yougameMember',
        success:function (res) {
            // console.log(res)
            if(!res.length){
                $('#team2').append(`
                    <div data-index="${res[0].a_id}" class="team2">
                        <div class="div1">
                            <img src="../images/allTeam/yougameteam.png"/></div>
                        <div><h1>YouGame综合讨论组</h1>
                            <h2><i class="fa fa-user ">&nbsp;&nbsp; <span class="yougameMember">0</span></i>
                                <i class="fa fa-file-text contentteamone "> &nbsp; <span class="yougamePostnum"></span></i> </h2>
                            <p>最新讨论: <span class="yougameDate">2018-12-02 19:31:59</span>/p>
                        </div>
                    </div>
              `)
            }else {
                $('#team2').append(`
                    <div data-index="${res[0].a_id}" class="team2">
                        <div class="div1">
                            <img src="../images/allTeam/yougameteam.png"/></div>
                        <div><h1>YouGame综合讨论组</h1>
                            <h2><i class="fa fa-user ">&nbsp;&nbsp; <span class="yougameMember">${res.length}</span></i>
                                <i class="fa fa-file-text contentteamone "> &nbsp; <span class="yougamePostnum"></span></i> </h2>
                            <p>最新讨论: <span class="yougameDate"></span></p>
                        </div>
                    </div>
              `)
            }

            $.ajax({
                url:'/yougamePostnum',
                success:function (res) {
                    $('.yougamePostnum').html(res.length);
                }
            });

            $.ajax({
                url:'/yougameDate',
                success:function (res) {
                    // console.log(res);
                    if(res[0].p_date==null){
                        $('.yougameDate').html('还没人发布哟！');
                    }else {
                        $('.yougameDate').html(res[0].p_date);
                    }
                }
            });
            $('body').on('click','.team2' ,function () {
                var a_id=$(this).attr('data-index');
                // console.log($(this).attr('data-index'))
                window.open('officialDetails.html?id='+a_id+'','_self');
            })
        }
    });
    $.ajax({
        url:'/fusheMember',
        success:function (res) {
            // console.log(res)
            if(!res.length){
                $('#team3').append(`
                    <div data-index="${res[0].a_id}" class="team3">
                            <img src="../images/allTeam/fushe.jpg"/>
                        <div><h1>辐射76</h1>
                            <h2><i class="fa fa-user ">&nbsp;&nbsp; <span class="fusheMember">0</span></i>
                                <i class="fa fa-file-text contentteamone "> &nbsp; <span class="fushePostnum"></span></i> </h2>
                            <p>最新讨论: <span class="fusheDate">2018-12-02 19:31:59</span>/p>
                        </div>
                    </div>
              `)
            }else {
                $('#team3').append(`
                    <div data-index="${res[0].a_id}" class="team3">
                            <img src="../images/allTeam/fushe.jpg"/>
                        <div><h1>辐射76</h1>
                            <h2><i class="fa fa-user ">&nbsp;&nbsp; <span class="fusheMember">${res.length}</span></i>
                                <i class="fa fa-file-text contentteamone "> &nbsp; <span class="fushePostnum"></span></i> </h2>
                            <p>最新讨论: <span class="fusheDate"></span></p>
                        </div>
                    </div>
              `)
            }

            $.ajax({
                url:'/fushePostnum',

                success:function (res) {

                    $('.fushePostnum').html(+res.length);
                }
            });

            $.ajax({
                url:'/fusheDate',
                success:function (res) {
                    // console.log(res);
                    if(res[0].p_date==null){
                        $('.fusheDate').html('还没人发布哟！');
                    }else {
                        $('.fusheDate').html(res[0].p_date);
                    }
                }
            });
            $('body').on('click','.team3' ,function () {
                var a_id=$(this).attr('data-index');
                window.open('officialDetails.html?id='+a_id+'','_self');
            })
        }
    });
    $.ajax({
        url:'/jzyMember',
        success:function (res) {
            // console.log(res)
            if(!res.length){
                $('#team4').append(`
                    <div data-index="${res[0].a_id}" class="team4">
                        <div class="div1">
                            <img src="../images/allTeam/jizhongying.jpg"/></div>
                        <div><h1>疑问集中组</h1>
                            <h2><i class="fa fa-user ">&nbsp;&nbsp; <span class="jzyMember">0</span></i>
                                <i class="fa fa-file-text contentteamone "> &nbsp; <span class="jzyPostnum"></span></i> </h2>
                            <p>最新讨论: <span class="jzyDate">2018-12-02 19:31:59</span>/p>
                        </div>
                    </div>
              `)
            }else {
                $('#team4').append(`
                    <div data-index="${res[0].a_id}" class="team4">
                            <img src="../images/allTeam/jizhongying.jpg"/>
                        <div><h1>疑问集中组</h1>
                            <h2><i class="fa fa-user ">&nbsp;&nbsp; <span class="jzyMember">${res.length}</span></i>
                                <i class="fa fa-file-text contentteamone "> &nbsp; <span class="jzyPostnum"></span></i> </h2>
                            <p>最新讨论: <span class="jzyDate"></span></p>
                        </div>
                    </div>
              `)
            }

            $.ajax({
                url:'/jzyPostnum',
                success:function (res) {
                    // console.log(res)
                    $('.jzyPostnum').html(res.length);
                }
            });

            $.ajax({
                url:'/jzyDate',
                success:function (res) {

                    if(res[0].p_date==null){
                        $('.jzyDate').html('还没人发布哟！');
                    }else {
                        $('.jzyDate').html(res[0].p_date);
                    }
                }
            });
            $('body').on('click','.team4' ,function () {
                var a_id=$(this).attr('data-index');
                window.open('officialDetails.html?id='+a_id+'','_self');
            });
            $('.title2').on('click','#a1' ,function () {
                var a_id=1;
                window.open('allTeam.html?id='+a_id+'','_self');
            })

        }
    });
}
center6();
function Appendzero(obj) {
    if(obj<10) {
        return '0'+obj;
    }
    else{
        return obj;
    }
}
$('.div2 .two').on('click','.submit-btn',function () {
    var src=$('.one').val();
    var give=0;
    var oDate=new Date();
    var y=oDate.getFullYear();
    var mon=oDate.getMonth()+1;
    var d=oDate.getDate();
    var h=oDate.getHours();
    var m=oDate.getMinutes();
    var s=oDate.getSeconds();
    var time=y+'-'+Appendzero(mon)+'-'+Appendzero(d)+' '+Appendzero(h)+':'+Appendzero(m)+':'+Appendzero(s);
    if(src==''){
        $("#disappare").show().delay(3000).hide(300);
    }else {
        $.ajax({
            url:'/AddTo',
            data:{b,a,src,give,time},
            success:function (res) {
                $('.one').val('');
                $('.u-bottom').empty();
                center5()
            }
        });
    }
});
$('.u-bottom').on('click','.u-delete',function () {
    let id=$(this).attr('data-id');
    $.ajax({
        url:'/y_deleteLeaving',
        data:{id},
        success:function (res) {
            $('.u-bottom').empty();
            center5()
            // window.location.reload()
        }
    })
});
$('.u-bottom').on('click','.repost',function () {
    let id=$(this).attr('data-id');
    let zx=$(this).attr('data-index');
    let zm=zx++;
    console.log(id,zx,zm);
    $.ajax({
        url:'/y_RepostThumbs',
        data:{id,zx,zm},
        success:function (res) {
            center5()
        }
    })
});
