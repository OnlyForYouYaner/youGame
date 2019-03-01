var mysql=require('mysql');
var demo=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var personalModel={
    forum: function (page,fn) {
        var sql='SELECT * FROM user JOIN postinformation ON user.u_id=postinformation.u_id JOIN allteam ON' +
            ' postinformation.a_id=allteam.a_id;';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    forumunm: function (fn) {
        var sql='SELECT COUNT(*) num FROM postinformation;';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    loginidone:function (k,page,so,fn) {
        var sql='SELECT * FROM user JOIN postinformation ON user.u_id=postinformation.u_id JOIN allteam ON' +
            ' postinformation.a_id=allteam.a_id WHERE p_id LIKE "%'+k+'%";';
        demo.query(sql, function (err, data) {
            fn(err,data);
            // console.log(data)
        });

    },
    loginidtwo:function (k,page,so,fn) {
        var sql='SELECT * FROM user JOIN postinformation ON user.u_id=postinformation.u_id JOIN allteam ON' +
            ' postinformation.a_id=allteam.a_id WHERE p_text LIKE "%'+k+'%";';
        demo.query(sql, function (err, data) {
            fn(err,data);
            // console.log(data)
        });

    },
    loginidthree:function (k,page,so,fn) {
        var sql='SELECT * FROM user JOIN postinformation ON user.u_id=postinformation.u_id JOIN allteam ON' +
            ' postinformation.a_id=allteam.a_id WHERE a_name LIKE "%'+k+'%";';
        demo.query(sql, function (err, data) {
            fn(err,data);
            // console.log(data)
        });

    },
    loginidfour:function (k,page,so,fn) {
        var sql='SELECT * FROM user JOIN postinformation ON user.u_id=postinformation.u_id JOIN allteam ON' +
            ' postinformation.a_id=allteam.a_id WHERE a_name LIKE "%'+k+'%" OR p_text LIKE "%'+k+'%" OR p_id LIKE "%'+k+'%"';
        demo.query(sql, function (err,data) {
            fn(err,data);
            // console.log(data)
        });
    },
    delete: function (id,fn) {
        var sql='DELETE FROM postinformation WHERE p_id='+id+';';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    Leaving: function (id,fn) {
        var sql='SELECT * FROM user JOIN postmessage ON user.u_id=postmessage.u_id JOIN postinformation ON' +
            ' postinformation.p_id=postmessage.p_id WHERE postinformation.p_id="'+id+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    deleteLeaving: function (id,fn) {
        var sql='DELETE FROM postmessage WHERE pm_id="'+id+'";';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
};
module.exports=personalModel;