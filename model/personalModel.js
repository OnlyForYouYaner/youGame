var mysql=require('mysql');
var demo=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var personalModel={
    //获取个人消息
    centerLnformation: function (a,fn) {
        var sql='SELECT user.u_id, user.u_nickName, user.u_atuograph, user.u_photo, gamesnumber.g_id FROM user JOIN' +
            ' gamesnumber ON gamesnumber.u_id = user.u_id WHERE user.u_id = "'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //游戏拥有信息
    centerGame: function (a,fn) {
        var sql='SELECT user.u_id, games.g_id, games.g_name, games.p_Path2 FROM user JOIN gamesnumber ON' +
            ' gamesnumber.u_id = user.u_id JOIN games ON gamesnumber.g_id = games.g_id WHERE user.u_id = "'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //关注小组
    centerGroup: function (a,fn) {
        var sql='SELECT user.u_id,allTeam.a_image,allTeam.a_name,allTeam.a_id FROM user JOIN userAttention ON userAttention.u_id' +
            ' = user.u_id JOIN allTeam ON userAttention.a_id = allTeam.a_id WHERE user.u_id = "'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //关注小组人数查询
    Total: function (id,fn) {
        var sql='SELECT DISTINCT * FROM allTeam JOIN userAttention ON allTeam.a_id = userAttention.a_id WHERE' +
            ' allTeam.a_id = "'+id+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //关注小组帖子数查询
    Posts: function (id,fn) {
        var sql='SELECT DISTINCT * FROM postinformation WHERE a_id="'+id+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //收藏
    centerCollection: function (a,fn) {
        var sql='';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //U帖
    centerPost: function (a,fn) {
        var sql='SELECT DISTINCT * FROM user JOIN PostInformation ON user.u_id= PostInformation.u_id WHERE user.u_id' +
            ' ="'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //点评
    centerComment: function (a,fn) {
        var sql='SELECT DISTINCT * FROM user JOIN GameMessage ON user.u_id= GameMessage.u_id JOIN Games ON GameMessage.g_id=games.g_id WHERE user.u_id' +
            ' ="'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //评论
    centerSelection: function (a,fn) {
        var sql='SELECT DISTINCT * FROM user JOIN postMessage ON user.u_id= postMessage.u_id JOIN PostInformation ON postMessage.P_id= PostInformation.P_id WHERE user.u_id' +
            ' ="'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    //回复
    centerReply: function (a,fn) {
        var sql='SELECT DISTINCT * FROM user JOIN GameMessage ON user.u_id= GameMessage.u_id JOIN Games ON GameMessage.g_id=games.g_id WHERE user.u_id' +
            ' ="'+a+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },

};
module.exports=personalModel;