var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var backModel= {
    autostart:function (fn) {
        var sql='SELECT COUNT(u_id) AS countnum  FROM USER;';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundordersum:function (fn) {
        var sql='SELECT COUNT(m_id) AS countnum  FROM roundorders;';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    gameordersum:function (fn) {
        var sql='SELECT COUNT(u_id) AS countnum  FROM gameorders;';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    gsum:function (fn) {
        var sql='SELECT COUNT(g_id) AS countnum FROM games ';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    msum:function (fn) {
        var sql='SELECT COUNT(m_id) AS countnum FROM  merchandise; ';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    msurplus:function (m_id,fn) {
        var sql='UPDATE  merchandise SET m_surplus=m_surplus-1 WHERE m_id='+m_id+'; ';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    mcart:function (m_id,fn) {
        var sql='UPDATE  merchandise SET m_surplus=m_surplus-1 WHERE m_id in('+m_id+'); ';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    msurplusone:function (m_id,number,fn) {
        var sql='UPDATE  merchandise SET m_surplus=m_surplus-'+number+' WHERE m_id='+m_id+'; ';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },

};


module.exports=backModel;