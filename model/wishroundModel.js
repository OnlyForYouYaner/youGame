/**
 * Created by Administrator on 2018/12/10.
 */
var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var wishroundModel={
    wishload:function (fn) {
        var sql='SELECT  m_show, m_name,m_price,m_id FROM merchandise WHERE m_id IN(SELECT m_id FROM wishround);';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    wishgameload:function (fn) {
        var sql='SELECT g_id,g_name,g_price,p_Path1 FROM games WHERE g_id IN(SELECT g_id FROM wishGames);';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    wishdel:function (id,fn) {
        var sql='DELETE FROM wishround WHERE m_id='+id+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    wishdelgame:function (id,fn) {
        var sql='DELETE FROM wishgames WHERE g_id='+id+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    wishadd:function (uid,mid,fn) {
        var sql='INSERT INTO shopPeriphery VALUES(NULL,'+uid+','+mid+',1)';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    wishaddgame:function (uid,mid,fn) {
        var sql='INSERT INTO shopgames VALUES(NULL,'+uid+','+mid+')';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


    wishfind:function (fn) {
        var sql='SELECT DISTINCT games.g_id,g_name,g_time,g_price,g_publisher,p_Path2 FROM wishgames,games WHERE wishgames.g_id = games.g_id ;'

        database.query(sql,function (err,data) {
            fn(err,data);
        })

    },
    wishfind2:function (fn) {
        var sql2='SELECT DISTINCT wishround.m_id,w_id,u_id,m_name,m_cost,m_type,m_price,m_surplus,m_show,m_tag,m_trademark  FROM wishround,merchandise WHERE wishround.m_id = merchandise.m_id ;';
        database.query(sql2,function (err,data) {
            fn(err,data);
        })

    }



};

module.exports=wishroundModel;