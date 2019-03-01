var mysql=require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var signModel={
    login: function (user,pass,fn) {
        var sql = 'SELECT * FROM user WHERE u_mail="'+user+'"AND u_pass="'+pass+'";';
        db.query(sql, function (err, data) {
            fn(err,data);
        })
    },
    phlogin: function (user,pass,fn) {
        var sql = 'SELECT * FROM user WHERE u_phone="'+user+'"AND u_pass="'+pass+'";';
        db.query(sql, function (err, data) {
            fn(err,data);
        })
    },
    loginid:function (fn) {
        var sql='SELECT * FROM user';
        db.query(sql, function (err, data) {
            fn(err,data);
        });

    },
    searchid1:function (num,page,fn) {
        // var sql1 = 'SELECT * FROM user JOIN roundorders On roundorders.u_id=user.u_id AND user.u_id="'+num+'";';
        // var sql2 = 'SELECT * FROM user JOIN gameorders On gameorders.u_id=user.u_id AND user.u_id="'+num+'";';
        var sql='SELECT u_id,o_ordernum,o_ordertime FROM gameorders WHERE u_id="'+num+'"  UNION ALL SELECT u_id,p_ordernum,p_ordertime FROM roundorders WHERE u_id="'+num+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    loginidone:function (k,page,so,fn) {
        var sql='SELECT * FROM user WHERE u_id LIKE "%'+k+'%"';
        db.query(sql, function (err, data) {
            fn(err,data);
            console.log(data)
        });

    },
    loginidtwo:function (k,page,so,fn) {
        var sql='SELECT * FROM user WHERE u_nickName LIKE "%'+k+'%"';
        db.query(sql, function (err, data) {
            fn(err,data);
            console.log(data)
        });

    },
    loginidthree:function (k,page,so,fn) {
        var sql='SELECT * FROM user WHERE u_mail LIKE "%'+k+'%"';
        db.query(sql, function (err, data) {
            fn(err,data);
            console.log(data)
        });

    },
    loginidfour:function (k,page,so,fn) {
        var sql='SELECT * FROM user WHERE u_mail LIKE "%'+k+'%" OR u_nickName LIKE "%'+k+'%" OR u_id LIKE "%'+k+'%"';
        db.query(sql, function (err,data) {
            fn(err,data);
            console.log(data)
        });
    },
    searchcuspage:function (num,fn) {
        var sql='SELECT u_id,o_ordernum,o_ordertime FROM gameorders WHERE u_id="'+num+'"  UNION ALL SELECT u_id,p_ordernum,p_ordertime FROM roundorders WHERE u_id="'+num+'";';
        db.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    searchpa:function (fn) {
        var sql='SELECT COUNT(*) num FROM user;';
        db.query(sql, function (err, data) {
            fn(err,data);

        });
    },
    searchpath:function (page,fn) {
        var sql='SELECT *  FROM user ORDER BY u_id;';
        db.query(sql, function (err, data) {
            fn(err,data);

        });
    },
    manage:function (user,pass,fn) {
        var sql='SELECT *  FROM managelist WHERE ma_name="'+user+'" AND ma_pass="'+pass+'";';
        db.query(sql, function (err, data) {
            fn(err,data);

        });
    },

};
module.exports=signModel;