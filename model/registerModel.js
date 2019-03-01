var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var registerModel= {
    register:function (email,pass,name,number,fn) {
        var sql='INSERT INTO USER VALUES(NULL,"'+email+'","","'+name+'","","","","'+number+'","../images/personal/default.jpg","'+pass+'");';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    registerph:function (phone,pass,name,number,fn) {
        var sql='INSERT INTO USER VALUES(NULL,"","'+phone+'","'+name+'","","","","'+number+'","../images/personal/default.jpg","'+pass+'");';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
};


module.exports=registerModel;