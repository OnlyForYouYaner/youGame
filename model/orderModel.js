/**
 * Created by Administrator on 2018/12/8.
 */
var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var orderModel={
    orderround:function (mid,fn) {
        var sql='SELECT m_name,m_price,m_show FROM merchandise WHERE m_id='+mid+';';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    ordernum:function (mid,fn) {
        var sql='SELECT * FROM shopPeriphery WHERE m_id='+mid+' ORDER BY s_id DESC;';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    gemesaddone:function (gid,fn) {
        var sql='SELECT g_name,g_price,p_path2 FROM games WHERE g_id='+gid+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    getaddressone:function (uid,fn) {
        var sql='SELECT * FROM harvestaddress WHERE u_id='+uid+'';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    payorderaddgames:function (uid,gid,time,ordernum,fn) {
        var sql='INSERT INTO gameorders VALUES(NULL,'+uid+','+gid+',"'+time+'",'+ordernum+',"发货中")';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    gamecartone:function (gid,fn) {
        var sql='SELECT g_name,g_price,p_path2 FROM games WHERE g_id IN('+gid+')';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    gamessumprice:function (gid,fn) {
        var sql='SELECT SUM(g_price)AS sumprice FROM games WHERE g_id IN('+gid+')';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundcartsum:function (mid,fn) {
        var sql='SELECT SUM(m_price)AS sumprice FROM merchandise WHERE m_id IN('+mid+')';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundcartone:function (mid,fn) {
        var sql='SELECT m_name,m_price,m_show FROM merchandise WHERE m_id IN('+mid+')';
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    gamecartoneadd:function (uid,gid,time,ordernum,fn) {
        var sql='INSERT INTO gameorders VALUES';
/*循环向插入数据*/
        gid.forEach(function (v,i) {
            sql=sql+'(NULL,"'+uid+'","'+v+'","'+time+'","'+ordernum+'","发货中"),';
            if (i+1==gid.length) {
                sql=sql.substring(0,sql.length-1);
                sql = sql + ';';
            }
        });
console.log(sql)
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundcartoneadd:function (uid,mid,time,ordernum,fn) {
        var sql='INSERT INTO roundorders VALUES';
/*循环向插入数据*/
        mid.forEach(function (v,i) {
            sql=sql+'(NULL,"'+uid+'","'+v+'","'+time+'","'+ordernum+'","发货中",1),';
            if (i+1==mid.length) {
                sql=sql.substring(0,sql.length-1);
                sql = sql + ';';
            }
        });
console.log(sql)
        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },



};

module.exports=orderModel;