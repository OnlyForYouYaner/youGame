var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var demoModel={
    getlunbo:function (fn) {
        var sql='SELECT * FROM games;';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    getround:function (fn) {
        var sql='SELECT * FROM merchandise;';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    newgame:function (fn) {
        var sql='SELECT * FROM games ORDER BY g_time DESC LIMIT 4;';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    getUtie:function(fn){
        var sql='SELECT * FROM postinformation ORDER BY p_fabulous DESC LIMIT 4;';
        db.query(sql,function (err,data) {

            fn(err,data);
        })
    },
    pricegame:function (fn) {
        var sql='SELECT * FROM games ORDER BY g_price DESC LIMIT 4;';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },

    allgametop:function (fn) {
        var sql='SELECT * FROM(SELECT g_name,g_time,p_Path2,games.g_id,COUNT(1) AS num FROM games JOIN gamesnumber ON games.g_id=gamesnumber.g_id GROUP BY g_name) AS acc ORDER BY CONVERT(num, SIGNED) DESC LIMIT 0,10;';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    newgameTime:function (Id,fn) {
        var sql='SELECT * FROM gametype WHERE g_id='+Id+'';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    demoallteam:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="官方小组" ';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    }

};

module.exports=demoModel;