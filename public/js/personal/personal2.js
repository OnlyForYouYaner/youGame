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
function centerLnformation(){
    var a=1;
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
    var a=1;
    $.ajax({
        url:'/centerGame',
        data:{a},
        success:function (res) {
            for (var i=-1;i<=res.length;i++){
                $('.y-game').append('<div class="y-yesgame">' +
                    '<div class="y-img">' +
                    '<div>' +
                    //'+res[i].p_Path2+'
                    '<img src="http://localhost:8081/images/personal/2.jpg" alt="">' +
                    '</div>' +
                    '<div>' +
                    '<h4>'+res[i+1].g_name+'</h4>' +
                    '</div>' +
                    '</div>' +
                    '<div class="y-details">' +
                    '<div>' +
                    '<span>去往游戏</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
            }
        }
    });
}
centerGame();
function centerGroup(url) {
    var a=2;
    $.ajax({
        url:url,
        data:{a},
        success:function (res) {
            for (var i=-1;i<=res.length;i++){
                $('.y-group').append(' <div class="y-yesgroup" data-id="'+res[i+1].a_id+'">\n' +
                    '                    <div class="y-img">\n' +
                    '                        <div>\n' +
                    '                             <img src="'+res[i+1].a_image+'" alt="">\n' +
                    '                        </div>\n' +
                    '                        <div>\n' +
                    '                            <h4>'+res[i+1].a_name+'</h4>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="y-details">\n' +
                    // '                        <div>\n' +
                    // '                            <span>345713</span>\n' +
                    // '                            <p>成员</p>\n' +
                    // '                        </div>\n' +
                    // '                        <div>\n' +
                    // '                            <span>3413</span>\n' +
                    // '                            <p>主题</p>\n' +
                    // '                        </div>\n' +
                    // '                        <div>\n' +
                    // '                            <button>去往小组</button>\n' +
                    // '                        </div>\n' +
                    // '                    </div>\n' +
                    '                </div>');

                $.ajax({
                    url:'/Total',
                    data:{id:res[i+1].a_id},
                    success:function (res) {
                        if(res[0].a_id){
                            $('.y-yesgroup').append('<div class="y-details">' +
                                '<div><span>'+res.length+'</span><p>成员</p></div>' +
                                '<div><span>3413</span><p>主题</p></div>' +
                                '</div>');
                        }

                    }
                });

            }
        }
    });


}
$('.l2').click(centerGroup('/centerGroup'));
// $('.l3').click(function () {
//     var a=6;
//     $.ajax({
//         url:'/centerCollection',
//         data:{a},
//         success:function (res) {
//             $('.y-content').append('<div class="y-img">' +
//                 '<img src="'+res[0].u_photo+'" alt="">' +
//                 '</div>'+
//                 '<div class="y-introduce">'+
//                 '<h2>'+res[0].u_nickName+'</h2>'+
//                 '<p>个人签名:'+res[0].u_atuograph+'</p>'+
//                 '<p class="p1">游戏数:'+res.length+'</p>'+
//                 '</div>');
//         }
//     });
// });
// // $('.l4').click(function () {
// //     var a=6;
// //     $.ajax({
// //         url:'/centerPost',
// //         data:{a},
// //         success:function (res) {
// //             $('.y-batten').append('<div class="y-img">' +
// //                 '<img src="'+res[0].u_photo+'" alt="">' +
// //                 '</div>'+
// //                 '<div class="y-introduce">'+
// //                 '<h2>'+res[0].u_nickName+'</h2>'+
// //                 '<p>个人签名:'+res[0].u_atuograph+'</p>'+
// //                 '<p class="p1">游戏数:'+res.length+'</p>'+
// //                 '</div>');
// //         }
// //     });
// // });

