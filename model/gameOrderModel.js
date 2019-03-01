var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var gameOrderModel={
    changeGame:function (u_id,u_name,u_phone,fn) {
        var sql='UPDATE USER SET u_phone="'+u_phone+'",u_name="'+u_name+'" WHERE u_id='+u_id+';';
        database.query(sql,function (err,data) {
            fn(err,data);
            // console.log(sql)
        })
    },
    getSumGamePage:function (fn) {
        var sql='SELECT COUNT(*) AS num FROM gameorders;';

        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    getOneGamePage:function (page,fn) {
        var sql='SELECT gameorders.o_ordertime,gameorders.o_id,gameorders.o_orderstatus,user.u_id,gameorders.o_ordernum,user.u_name,user.u_phone,games.g_price,games.g_name,gametype.t_type FROM gameorders,games,USER,gametype WHERE games.g_id=gametype.g_id AND gameorders.u_id=user.u_id AND gameorders.g_id=games.g_id GROUP BY gameorders.o_ordernum;';

        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    getEveryGamePage:function (page,fn) {
        var sql='SELECT gameorders.o_ordertime,gameorders.o_id,gameorders.o_orderstatus,user.u_id,gameorders.o_ordernum,user.u_name,user.u_phone,games.g_price,games.g_name,gametype.t_type FROM gameorders,games,USER,gametype WHERE games.g_id=gametype.g_id AND gameorders.u_id=user.u_id AND gameorders.g_id=games.g_id GROUP BY gameorders.o_ordernum;';

        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },


};

module.exports=gameOrderModel;