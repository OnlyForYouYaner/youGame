/**
 * Created by Administrator on 2018/12/7.
 */
var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var shopModel={
    shopround:function (id,fn) {
        var sql='SELECT * FROM merchandise JOIN roundinformation ON merchandise.m_id=roundinformation.m_id WHERE merchandise.m_id="'+id+'";';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    wishshoproundone:function (mid,uid,fn) {
        var sql='INSERT INTO wishRound VALUES(NULL,'+mid+','+uid+');';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    shopcartRound:function (uid,mid,num,fn) {
        var sql='INSERT INTO shopPeriphery VALUES(NULL,'+uid+','+mid+','+num+');';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    payorderadd:function (uid,mid,time,number,ordernum,fn) {
        var sql='INSERT INTO roundorders VALUES(NULL,'+uid+','+mid+',"'+time+'",'+ordernum+',"发货中",'+number+')';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },


}

module.exports=shopModel;