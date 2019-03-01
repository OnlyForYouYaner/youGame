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

var shoppingcartModel={
    shopcartload:function (fn) {
        var sql='SELECT  m_show, m_name,m_price,m_id  FROM merchandise WHERE m_id IN(SELECT m_id FROM shopPeriphery)';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartgames:function (fn) {
        var sql='SELECT g_id,g_name,g_price,p_Path1 FROM games WHERE g_id IN(SELECT g_id FROM shopGames)';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartall:function (fn) {
        var sql='SELECT  SUM(m_price)AS m_sum FROM merchandise WHERE m_id IN(SELECT m_id FROM shopPeriphery)';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartgameall:function (fn) {
        var sql='SELECT  SUM(g_price)AS g_sum FROM games WHERE g_id IN(SELECT g_id FROM shopgames)';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartdel:function (id,fn) {
        var sql='DELETE FROM shopPeriphery WHERE m_id='+id+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartgamedel:function (gid,fn) {
        var sql='DELETE FROM wishgames WHERE g_id='+gid+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartchecked:function (id,fn) {
        var sql='SELECT m_price FROM merchandise  WHERE m_id='+id+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shopcartcheckedg:function (id,fn) {
        var sql='SELECT g_price FROM games  WHERE g_id='+id+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shoppingcartadd:function (uid,mid,fn) {
        var sql='INSERT INTO wishRound VALUES(NULL,'+mid+','+uid+');';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shoppingcartgameadd:function (uid,gid,fn) {
        var sql='INSERT INTO wishgames VALUES(NULL,1,'+gid+');';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },



}

module.exports=shoppingcartModel;