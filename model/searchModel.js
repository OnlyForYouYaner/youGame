var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var searchModel={
    searchU:function (data1,fn) {
        var sql='SELECT * FROM postinformation WHERE p_text LIKE "%'+data1+'%";';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    searchallteam:function (Id,fn) {
        var sql='SELECT * FROM allteam WHERE a_id="'+Id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchuser:function (Id,fn) {
        var sql='SELECT * FROM user WHERE u_id="'+Id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchgames:function (data,fn) {
        var sql='SELECT * FROM gamemessage WHERE m_message  LIKE "%'+data+'%";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchallgames:function (Id,fn) {
        var sql='SELECT * FROM games WHERE g_id="'+Id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchusername:function (name,fn) {
        var sql='SELECT * FROM user WHERE u_nickName LIKE "%'+name+'%";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchallteamname:function (name,fn) {
        var sql='SELECT * FROM allteam WHERE a_name LIKE "%'+name+'%";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchallteampeo:function (Id,fn) {
        var sql='SELECT COUNT(*) AS peo FROM userattention WHERE a_id="'+Id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchallteamutie:function (Id,fn) {
        var sql='SELECT COUNT(*) AS peo FROM postinformation WHERE a_id="'+Id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchusergame:function (Id,fn) {
        var sql='SELECT COUNT(*) AS peo FROM gamesnumber WHERE u_id="'+Id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchallgemesright:function (fn) {
        var sql='SELECT * FROM games ORDER BY g_time DESC LIMIT 0,4;';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchG:function (id,fn) {
        var sql='SELECT * FROM games WHERE g_name="'+id+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
    searchR:function (id,fn) {
        var sql='SELECT * FROM merchandise WHERE m_name="'+id+'" ;';
        db.query(sql,function (err,data) {
            fn(err,data);
        });

    },
};

module.exports=searchModel;