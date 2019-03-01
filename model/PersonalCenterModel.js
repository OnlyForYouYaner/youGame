/**
 * Created by 华辉 on 2018/12/10 0010.
 */
/**
 * Created by 华辉 on 2018/12/9 0009.
 */
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
var PersonalCenterModel={
    Informationfind:function (fn) {
        var sql='SELECT DISTINCT * FROM user where u_id = 1 ;';

        database.query(sql,function (err,data) {
            fn(err,data);
        })

    },
    beathfind:function (fn) {
        var sql2='SELECT SUBSTRING(u_idNumber,7,4) AS year,SUBSTRING(u_idNumber,11,2) AS month,SUBSTRING(u_idNumber,13,2) AS day FROM USER WHERE u_id = 1;';

        database.query(sql2,function (err,data) {
            fn(err,data);
        })

    },
    addressfind:function (fn) {
        var sql3='SELECT * FROM harvestaddress WHERE u_id = 1;';

        database.query(sql3,function (err,data) {
            fn(err,data);
        })

    },
    addressfind1:function (id,fn) {
        var sql5='SELECT * FROM harvestaddress WHERE a_id = "'+id+'";';

        database.query(sql5,function (err,data) {
            fn(err,data);
        })

    },
    countadres:function (fn) {
        var sql4='SELECT COUNT(u_id) AS num1,10-COUNT(u_id) AS num2 FROM harvestaddress WHERE u_id = 1;';

        database.query(sql4,function (err,data) {
            fn(err,data);
        })

    },
    modifybtn:function (a,b,c,d,e,fn) {
        var sql6='UPDATE USER SET u_atuograph="'+a+'",u_name="'+b+'",u_mail="'+c+'",u_phone="'+d+'",u_sex="'+e+' WHERE u_id = 1;';

        database.query(sql6,function (err,data) {
            fn(err,data);
        })

    },
    delbtn:function (id,fn) {
        var sql7='DELETE FROM harvestaddress WHERE a_id ="'+id+'"; ';

        database.query(sql7,function (err,data) {
            fn(err,data);
        })

    },
    addaddress:function (na,ph,ad,co,te,ina,fn) {
        var sql8='INSERT INTO harvestaddress VALUES (NULL,1,"'+na+'","'+ph+'","'+ad+'","'+co+'","'+te+'","'+ina+'");';
        database.query(sql8,function (err,data) {
            fn(err,data);
        })

    },
    addressnum:function (fn) {
        var sql9='SELECT COUNT(*) AS num FROM harvestaddress WHERE u_id = 1;';
        database.query(sql9,function (err,data) {
            fn(err,data);
        })

    },
    deladdress:function (id,fn) {
        var sql10='DELETE FROM harvestaddress WHERE a_id ="'+id+'"; ';
        database.query(sql10,function (err,data) {
            fn(err,data);
        })

    },
};

module.exports=PersonalCenterModel;