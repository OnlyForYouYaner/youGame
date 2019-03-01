/**
 * Created by 华辉 on 2018/12/11 0011.
 */
/**
 * Created by 华辉 on 2018/12/11 0011.
 */
var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var communityModel={
    postfind:function (userid,fn) {
        var sql='SELECT * FROM postinformation,USER WHERE postinformation.`u_id`=user.`u_id`;';
        database.query(sql,function (err,data) {
            console.log(data);
            fn(err,data);
        })
    },
    postfind2:function (userid,fn) {
        var sql='SELECT * FROM postinformation,USER WHERE postinformation.`u_id`=user.`u_id` order by p_fabulous desc ;';
        database.query(sql,function (err,data) {
            console.log(data);
            fn(err,data);
        })
    },
    useright:function (userid,fn) {
        var sql2='SELECT u_atuograph,u_nickName,u_photo,COUNT(*) AS gamesnum FROM USER,gamesnumber WHERE user.u_id=gamesnumber.u_id AND user.u_id='+userid+';';
        database.query(sql2,function (err,data) {
            console.log(data);
            fn(err,data);
        })
    }

};
module.exports=communityModel;