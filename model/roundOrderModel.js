var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});

var roundOrderModel={
    changeRound:function (a_phone,a_name,inTheArea,postalcode,u_id,fn) {
        let sql='UPDATE harvestaddress SET a_phone="'+a_phone+'",a_name="'+a_name+'",inTheArea="'+inTheArea+'",postalcode='+postalcode+' WHERE u_id='+u_id+';';
        database.query(sql,function (err,data) {
            fn(err,data);
            // console.log(sql)
        })
    },
    getOnePage:function (page,fn) {
        let sql='SELECT roundorders.p_ordernum,roundorders.p_id,roundorders.p_ordertime,merchandise.m_name,roundorders.p_orderstatus,harvestaddress.a_name,merchandise.m_price,roundorders.roundNum,harvestaddress.u_id,harvestaddress.inTheArea,harvestaddress.a_phone,harvestaddress.postalcode,merchandise.m_price*roundorders.roundNum AS roundSum FROM roundorders,merchandise,harvestaddress,USER WHERE roundorders.u_id=user.u_id AND user.u_id=harvestaddress.u_id AND roundorders.m_id=merchandise.m_id;';

        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    getSumPage:function (fn) {
        let sql='SELECT COUNT(*) AS num FROM roundorders;';

        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    getEveryPage:function (page,k,fn) {
        if(k==''){
            let sql='SELECT roundorders.p_ordernum,roundorders.p_id,roundorders.p_ordertime,merchandise.m_name,roundorders.p_orderstatus,harvestaddress.a_name,merchandise.m_price,roundorders.roundNum,harvestaddress.u_id,harvestaddress.inTheArea,harvestaddress.a_phone,harvestaddress.postalcode,merchandise.m_price*roundorders.roundNum AS roundSum FROM roundorders,merchandise,harvestaddress,USER WHERE roundorders.u_id=user.u_id AND user.u_id=harvestaddress.u_id AND roundorders.m_id=merchandise.m_id ;';
            database.query(sql,function (err,data) {
                fn(err,data)
            })
        }else {
            let sql='SELECT roundorders.p_ordernum,roundorders.p_id,roundorders.p_ordertime,merchandise.m_name,roundorders.p_orderstatus,harvestaddress.a_name,merchandise.m_price,roundorders.roundNum,harvestaddress.u_id,harvestaddress.inTheArea,harvestaddress.a_phone,harvestaddress.postalcode,merchandise.m_price*roundorders.roundNum AS roundSum FROM USER JOIN roundorders ON user.u_id=roundorders.u_id JOIN harvestaddress ON user.u_id=harvestaddress.u_id JOIN merchandise ON merchandise.m_id=roundorders.m_id  WHERE merchandise.m_name LIKE "%'+k+'%" OR roundorders.p_ordernum LIKE "%'+k+'%" ;';
            database.query(sql,function (err,data) {
                fn(err,data)
            })
        }

    },

};

module.exports=roundOrderModel;