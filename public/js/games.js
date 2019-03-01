var page=1;
function getPageNum() {
    $.ajax({
        url:'/newGameCount',
        success:function (res) {
            if(!res.error){
                $('#pagination').html('');
                for(var i=0;i<res.count;i++){
                    $('#pagination').append(`<li data-index="${i+1}">${i+1}</li>`)
                }
                $('#pagination li').eq(page-1).addClass('active').siblings().removeClass('active');
            }
        }
    });
}
getPageNum();
getNewGame('/newGameContent',1);
function getNewGame(inter,num) {
    $.ajax({
        url: inter,
        data:{
            page:num
        },
        success:function (res) {
            if (!res.error){
                $('#game').html('');
                $(res.data).each(function () {
                    $('#game').append(` <li data-id="${this.g_id}" id="${this.g_id}">
                        <img src="${this.p_Path2}" alt="">
                        <div>
                            <p class="title">${this.g_name}</p>
                            <p class="date">发行于${this.g_time.split('T')[0]}</p>
                            <ul>
                                <!--&lt;!&ndash; <li><a href="">动作</a></li>-->
                                <!--<li><a href="">角色扮演</a></li>-->
                                <!--<li><a href="">冒险</a></li>&ndash;&gt;-->
                            </ul>
                        </div>
                        <span class="game-sale-price">￥${this.g_price}</span>
                    </li>`);
                    var a=this.g_id;
                    $('#game').on('click',"#"+a,function () {
                        var OID=$(this).attr('data-id');
                        window.open('products.html?g_id='+OID+'','_self')
                    });
                    $.ajax({
                        url:'/gameType',
                        data: {
                            Id:this.g_id
                        },
                        success:function (res) {
                            // console.log(res.data);
                            $(res.data).each(function () {
                                $("#"+a+" div ul").append(`<li><a href="">${this.t_type}</a></li>`);
                            })
                        }
                    })
                })
            }
        }
    })
}
$('#sort-new').click(function () {
    getNewGame('/newGameContent',1);
    $('#sort li').removeClass('active');
    $('#sort-new').addClass('active');
});
$('#sort-score').click(function () {
    getNewGame('/grade',1);
    $('#sort li').removeClass('active');
    $('#sort-score').addClass('active')
});
$('#sort-wish').click(function () {
   getNewGame('/ourWish',1);
    $('#sort li').removeClass('active');
    $('#sort-wish').addClass('active')
});
$('#sort-Price').click(function () {
    // console.log($('#sort-Price span').attr('data-index'));
    if(($('#sort-Price span').attr('data-index'))=='true'){
        getNewGame('/downPrice',1);
        $('#sort-Price span').attr('data-index','false')
            .removeClass('glyphicon-chevron-up')
            .addClass('glyphicon-chevron-down')
    }else {
        getNewGame('/upPrice',1);
        $('#sort-Price span').attr('data-index','true')
            .removeClass('glyphicon-chevron-down')
            .addClass('glyphicon-chevron-up')
    }

    $('#sort li').removeClass('active');
    $('#sort-Price').addClass('active')
});





$('#pagination').on('click','li',function () {
    if($('#sort-new').attr('class')){
        getNewGame('/newGameContent',$(this).attr('data-index'));
    }else if($('#sort-score').attr('class')){
        getNewGame('/grade',$(this).attr('data-index'));
    }else if($('#sort-wish').attr('class')){
        getNewGame('/ourWish',$(this).attr('data-index'));
    }else if($('#sort-Price').attr('class')){
        getNewGame('/downPrice',$(this).attr('data-index'));
    }
    page=$(this).attr('data-index');
    $('#pagination li').eq(page-1).addClass('active').siblings().removeClass('active');
});














