var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var ServerModel= {
    Serverfind: function (fn) {
        var sql = 'SELECT * FROM service,USER WHERE service.s_userid = user.u_id;';
        database.query(sql, function (err, data) {
            fn(err, data);
        })

    },
    Serverfind2: function (fn) {
        var sql = 'SELECT * FROM USER,sereply WHERE  user.u_id = sereply.s_userid;';
        database.query(sql, function (err, data) {
            fn(err, data);
        })

    },

    Serverfind3: function (fn) {
        var sql = 'SELECT * FROM service,USER WHERE service.s_userid = user.u_id;';
        database.query(sql, function (err, data) {
            fn(err, data);
        })

    },
    Serverfind4: function (id,fn) {
        var sql = 'SELECT * FROM USER,sereply WHERE  user.u_id = sereply.s_userid and user.u_id = '+id+';';
        database.query(sql, function (err, data) {
            fn(err, data);
        })

    },
    Serverfind5: function (id,fn) {
        var sql = 'SELECT * FROM service,USER WHERE service.s_userid = user.u_id and user.u_id ='+id+';';
        database.query(sql, function (err, data) {
            fn(err, data);
        })

    },
    Serverfind6: function (userid,username,reply,replydate,fn) {
        var sql = 'INSERT INTO sereply (s_userid,s_username,s_reply,s_replydate) VALUES ('+userid+',"'+username+'","'+reply+'","'+replydate+'");';
        database.query(sql, function (err, data) {
            fn(err, data);
        })

    },
    Serverfind7: function (username,message,date,replyid,fn) {
        var sql = 'INSERT INTO service (s_username,s_message,s_date,s_userid) VALUES ("'+username+'","'+message+'","'+date+'",'+replyid+');';
        database.query(sql, function (err, data) {
            fn(err, data);
        })
    },
}
module.exports=ServerModel;