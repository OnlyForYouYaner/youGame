/**
 * Created by 华辉 on 2018/12/8 0008.
 */
var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var ordersModel={
    orderfind:function (fn) {
        var sql='SELECT DISTINCT * FROM games,gameorders WHERE games.g_id = gameorders.g_id ;'

        database.query(sql,function (err,data) {
            fn(err,data);
        })

    },
    orderfind2:function (fn) {
        var sql2='SELECT DISTINCT * FROM merchandise,roundorders WHERE merchandise.m_id = roundorders.m_id ;';
        database.query(sql2,function (err,data) {
            fn(err,data);
        })

    },
    orderough:function (fn) {
        var sql3='SELECT DISTINCT * FROM games,gameorders WHERE games.g_id = gameorders.g_id AND o_orderstatus ="未完成";';
        database.query(sql3,function (err,data) {
            fn(err,data);
        })

    },
    orderough2:function (fn) {
        var sql4='SELECT DISTINCT * FROM merchandise,roundorders WHERE merchandise.m_id = roundorders.m_id AND p_orderstatus ="未完成";';
        database.query(sql4,function (err,data) {
            fn(err,data);
        })

    },
    orderover:function (fn) {
        var sql5='SELECT DISTINCT * FROM games,gameorders WHERE games.g_id = gameorders.g_id AND o_orderstatus ="已完成";';
        database.query(sql5,function (err,data) {
            fn(err,data);
        })

    },
    orderover2:function (fn) {
        var sql6='SELECT DISTINCT * FROM merchandise,roundorders WHERE merchandise.m_id = roundorders.m_id AND p_orderstatus ="已完成";';
        database.query(sql6,function (err,data) {
            fn(err,data);
        })

    },
    orderzhifu:function (id,fn) {
        var sql7='SELECT DISTINCT * AS num FROM merchandise,roundorders WHERE merchandise.m_id = roundorders.m_id AND u_id ="'+id+'";' ;
        database.query(sql7,function (err,data) {
            fn(err,data);
        })

    }


};

module.exports=ordersModel;