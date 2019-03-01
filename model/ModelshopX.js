var mysql=require('mysql');
var demo=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var shopXModel={
    roundX: function (fn) {
        var sql='SELECT * FROM merchandise';
        demo.query(sql,function (err,data) {
            fn(err,data)
        });
    },
    searchpaX:function (fn) {
        var sql='SELECT COUNT(*) num FROM merchandise;';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    searchthisX:function (page,fn) {
        var sql='SELECT *  FROM merchandise ORDER BY m_id;';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    changeEditX:function(name,cost,type,price,state,surplus,trademark,tag,id,fn){
        var sql='UPDATE merchandise SET m_name="'+name+'",m_cost='+cost+',m_type="'+type+'",m_price='+price+',m_state="'+state+'",m_surplus="'+surplus+'",m_trademark="'+trademark+'",m_tag="'+tag+'"WHERE m_id='+id+';';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    upperX:function(up,fn){
        var sql='UPDATE merchandise SET m_state = "已上架" WHERE m_id='+up+';';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    lowerX:function(down,fn){
        var sql='UPDATE merchandise SET m_state = "已下架" WHERE m_id='+down+';';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    addX:function(id,name,cost,type,price,surplus,trademark,tag,img,fn){
        var sql='INSERT INTO merchandise (m_id,m_name,m_cost,m_type,m_price,m_surplus,m_trademark,m_tag,m_show,m_introduce) VALUES (NULL,"'+name+'",'+cost+',"'+type+'",'+price+','+surplus+',"'+trademark+'","'+tag+'","../images/roundImage/'+img[0]+'","../images/roundImage/'+img[1]+'")';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    addinformtion:function(xmid,fn){
        var sql='INSERT INTO roundinformation VALUES(NULL,'+xmid+',"居家办公",NULL,"标准",NULL,NULL)';
                demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },
    addxid:function(xname,fn){
        var sql='SELECT m_id FROM `merchandise` WHERE m_name='+xname+'';
        demo.query(sql,function (err,data) {
            fn(err,data);
        });
    },


    imgX:function(){},
    loginoneX:function (k,page,so,fn) {
        var sql='SELECT * FROM merchandise WHERE m_id LIKE "%'+k+'%"';
        demo.query(sql,function (err,data) {
            fn(err,data);

        });
    },
    logintwoX:function (k,page,so,fn) {
        var sql='SELECT * FROM merchandise WHERE m_name LIKE "%'+k+'%"';
        demo.query(sql,function (err,data) {
            fn(err,data);

        });
    },
    loginthreeX:function (k,page,so,fn) {
        var sql='SELECT * FROM merchandise WHERE m_cost LIKE "%'+k+'%"';
        demo.query(sql,function (err,data) {
            fn(err,data);

        });
    },
    loginfiveX:function (k,page,so,fn) {
        var sql='SELECT * FROM merchandise WHERE m_type LIKE "%'+k+'%"';
        demo.query(sql,function (err,data) {
            fn(err,data);

        });
    },
    loginsixX:function (k,page,so,fn) {
        var sql='SELECT * FROM merchandise WHERE m_price LIKE "%'+k+'%"';
        demo.query(sql,function (err,data) {
            fn(err,data);

        });
    },
    loginfourX:function (k,page,so,fn) {
        var sql='SELECT * FROM merchandise WHERE m_id LIKE "%'+k+'%" OR  m_cost LIKE "%'+k+'%" OR m_name LIKE "%'+k+'%"';
        demo.query(sql,function (err,data) {
            fn(err,data);

        });
    },



};
module.exports=shopXModel;