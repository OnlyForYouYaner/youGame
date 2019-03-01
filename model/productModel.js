var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var productModel={
    product:function (ID,fn) {
        var sql='SELECT * FROM games WHERE g_id='+ID+';';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },


    addMessage:function (UID,GID,fen,nei,t,fn) {
        var sql='INSERT INTO gamemessage VALUES (NULL,'+GID+','+UID+','+fen+',"'+nei+'",0,"'+t+'",0)';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    gameLanguage:function (Id,fn) {
        var sql='SELECT * FROM gamelanguage WHERE g_id='+Id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameSys:function (Id,fn) {
        var sql='SELECT * FROM gameos WHERE g_id='+Id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameHotRe:function (Id,fn) {
        var sql='SELECT * FROM gamemessage WHERE g_id='+Id+' AND m_give>0 ORDER BY (m_give-m_step) DESC LIMIT 2';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameMeU:function (Id,fn) {
        var sql='SELECT * FROM user WHERE u_id='+Id+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameMeN:function (Id,fn) {
        var sql='SELECT COUNT(*) AS num FROM gamesnumber WHERE  u_id='+Id+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameNewRe:function (Id,fn) {
        var sql='SELECT * FROM gamemessage WHERE g_id='+Id+' ORDER BY m_date DESC LIMIT 2';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    thumbsUp:function (Id,fn) {
        var sql='UPDATE gamemessage SET m_give = m_give+1 WHERE m_id='+Id+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    thumbsDown:function (Id,fn) {
        var sql='UPDATE gamemessage SET m_step = m_give+1 WHERE m_id='+Id+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameSelCart:function (UID,GID,fn) {
        var sql='SELECT * FROM shopgames WHERE u_id='+UID+' AND g_id='+GID+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameAddCart:function (UID,GID,fn) {
        var sql='INSERT INTO shopgames VALUES (NULL,'+UID+','+GID+');';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameSelWish:function (UID,GID,fn) {
        var sql='SELECT * FROM wishgames WHERE u_id='+UID+' AND g_id='+GID+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameAddWish:function (UID,GID,fn) {
        var sql='INSERT INTO wishgames VALUES (NULL,'+UID+','+GID+');';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameJWish:function (UID,GID,fn) {

        var sql='DELETE FROM wishgames WHERE u_id='+UID+' AND g_id='+GID+';';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
};



module.exports=productModel;