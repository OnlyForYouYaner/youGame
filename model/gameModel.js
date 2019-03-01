var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var gameModel={
    newGameCount:function (fn) {
        var sql='SELECT COUNT(*) num FROM games WHERE g_state="上架";';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    newGameContent:function (page,fn) {
        var sql='SELECT * FROM games WHERE g_state="上架" ORDER BY g_time DESC';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    newGameContents:function (page,fn) {
        var sql='SELECT * FROM games WHERE g_state="上架" ORDER BY g_id';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    gameType:function (Id,fn) {
        var sql='SELECT * FROM gametype WHERE g_id='+Id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    grade:function (page,fn) {
        var sql='SELECT *,AVG(gamemessage.`m_score`)AS score FROM games JOIN gamemessage  ON games.g_id=gamemessage.`g_id` GROUP BY g_name ORDER BY score DESC';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    AScore:function (id,fn) {
        var sql='SELECT AVG(m_score) AS score FROM gamemessage WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    ourWish:function (page,fn) {
        var sql='SELECT *,COUNT(g_name ) AS wish  FROM games JOIN wishgames ON games.`g_id`=wishgames.`g_id`  GROUP BY g_name ORDER BY wish DESC';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    downPrice:function (page,fn) {
        var sql='SELECT * FROM games ORDER BY g_price DESC';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    upPrice:function (page,fn) {
        var sql='SELECT * FROM games ORDER BY g_price';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    upper:function (id,fn) {
        var sql='UPDATE games SET g_state = "上架" WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    Lower:function (id,fn) {
        var sql='UPDATE games SET g_state = "下架" WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    GType:function (id,fn) {
        var sql='SELECT * FROM gametype WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    GOs:function (id,fn) {
        var sql='SELECT * FROM gameos WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    editG:function (id,gName,EName,gTime,price,sPrice,pub,dev,intr,sys,mem,pro,ima,sou,disk,dX,int,copy,sta,fn) {
        var sql='UPDATE games SET g_name="'+gName+'",g_en_name="'+EName+'",g_time="'+gTime+'",g_price='+price+',g_publisher="'+pub+'",g_developer="'+dev+'",g_Introduction="'+intr+'",g_system="'+sys+'",g_memory="'+mem+'",g_processor="'+pro+'",g_image="'+ima+'",g_soundCard="'+sou+'",g_disk="'+disk+'",g_directX="'+dX+'",g_Int="'+int+'",g_copy="'+copy+'",g_state="'+sta+'" WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    addG:function (gName,EName,gTime,price,sPrice,pub,dev,intr,sys,mem,pro,ima,sou,disk,dX,int,copy,sta,img1,img2,fn) {
        var sql='INSERT INTO games VALUES (NULL,"'+gName+'","'+EName+'","'+gTime+'",'+price+',NULL,"'+pub+'","'+dev+'","'+intr+'","'+sys+'","'+mem+'","'+pro+'","'+ima+'","'+sou+'","'+disk+'","'+dX+'","images/games/upload/'+img2[0]+'","images/games/upload/'+img2[1]+'","images/games/upload/'+img1[0]+'","images/games/upload/'+img1[1]+'","images/games/upload/'+img1[2]+'","images/games/upload/'+img1[3]+'","images/games/upload/'+img1[4]+'","'+int+'","'+copy+'","'+sta+'")';
        db.query(sql,function (err,data) {
            fn(err,data);

        });
    },
    addT:function(id,type,fn){
        var sql='INSERT INTO gametype VALUES(NULL,'+id+',"'+type+'")';
        db.query(sql,function (err,data) {
            fn(err,data)
        })

    },
    addO:function(id,os,fn){
        var sql='INSERT INTO gameos VALUES(NULL,'+id+',"'+os+'")';
        db.query(sql,function (err,data) {
            fn(err,data)
        })

    },
    addL:function(id,language,fn){
        var sql='INSERT INTO gamelanguage VALUES(NULL,'+id+',"'+language+'")';
        db.query(sql,function (err,data) {
            fn(err,data)
        })

    },
    dedT:function(id,fn){
        var sql='DELETE FROM gametype WHERE g_id= '+id+'';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    dedO:function(id,fn){
        var sql='DELETE FROM gameos WHERE g_id= '+id+'';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    dedL:function(id,fn){
        var sql='DELETE FROM gamelanguage WHERE g_id= '+id+'';
        db.query(sql,function (err,data) {
            fn(err,data)
        })
    },
    GLanguage:function (id,fn) {
        var sql='SELECT * FROM gamelanguage WHERE g_id='+id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    GameContents:function (k,page,fn) {
        var sql='SELECT * FROM games WHERE g_id LIKE "%'+k+'%" OR g_name LIKE "%'+k+'%" OR g_state="'+k+'"';
        db.query(sql, function (err, data) {
            fn(err,data);
        });

    },
};


module.exports=gameModel;