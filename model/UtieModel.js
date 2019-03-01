var mysql=require('mysql');
var demo=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var personalModel={
    //U帖
    content: function (b,fn) {
        var sql='SELECT * FROM PostInformation WHERE p_id='+b+';';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    PersonalInformation: function (b,fn) {
        var sql = 'SELECT DISTINCT * FROM PostInformation JOIN user ON postinformation.u_id=user.u_id WHERE p_id='+b+';';
        demo.query(sql, function (err, data) {
            fn(err, data)
        });
    },
    GroupNameOne: function (b,fn) {
        var sql = 'SELECT DISTINCT * FROM postinformation JOIN allteam ON postinformation.a_id=allteam.a_id WHERE postinformation.p_id='+b+';';
        demo.query(sql, function (err, data) {
            fn(err, data)
        });
    },
    LeavingAmessage: function (b,fn) {
        var sql = 'SELECT DISTINCT * FROM postmessage JOIN user ON postmessage.u_id=user.u_id WHERE postmessage.p_id='+b+';';
        demo.query(sql, function (err, data) {
            fn(err, data)
        });
    },
    AddTo: function (a,b,src,give,time,fn) {
        var sql = "INSERT INTO postmessage VALUES(NULL,"+b+","+a+",'"+src+"',"+give+",'"+time+"');";
        demo.query(sql, function (err, data) {
            fn(err, data)
        });
    },
    GiveTheThumbsUp: function (b,ms,ma,fn) {
        var sql='UPDATE postinformation SET p_fabulous = REPLACE(p_fabulous, '+ms+','+ma+') WHERE p_id = '+b+';';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    Collection: function (b,fn) {
        var sql='SELECT * FROM collection WHERE p_id='+b+'';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    CollectionYes: function (b,a,fn) {
        var sql='SELECT * FROM collection WHERE p_id='+b+' AND u_id='+a+'';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    CollectionY: function (b,a,fn) {
        var sql='DELETE FROM collection WHERE p_id='+b+' AND u_id='+a+';';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    CollectionN: function (b,a,fn) {
        var sql='INSERT INTO collection VALUES (null,'+a+','+b+');';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    RepostThumbs: function (id,zx,zm,fn) {
        var sql='UPDATE postmessage SET pm_give = REPLACE(pm_give, '+zm+','+zx+') WHERE pm_id = '+id+';';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },

};
module.exports=personalModel;