/**
 * Created by Administrator on 2018/12/6.
 */

var mysql=require('mysql');

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});


var roundModel={
    roundindex:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="周边" AND m_tag="怪物猎人世界"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    two:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="周边" AND m_trademark="读库"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundbrand:function (brand,fn) {
        var sql='SELECT	* FROM merchandise WHERE  m_trademark="'+brand+'";';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundtag:function (tag,fn) {
        var sql='SELECT	* FROM merchandise WHERE  m_tag="'+tag+'";';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundtype:function (type,fn) {
        var sql='SELECT * FROM merchandise WHERE m_id IN(SELECT r_id FROM roundinformation WHERE r_type="'+type+'");';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    roundmore:function (tage,fn) {
        var sql='SELECT	* FROM merchandise WHERE  m_tag="'+tage+'"or m_trademark="'+tage+'";';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    three:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="周边" AND m_tag="怪物猎人XX"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    dange:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="周边" AND m_tag="生化危机"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    handle:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE  m_trademark="北通游戏手柄"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    soft:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="周边" AND m_trademark="微软中国"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    hot:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="热门" ';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    limi:function (fn) {
        var sql='SELECT	* FROM merchandise WHERE m_type="促销" ';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    coverone:function (fn) {
        var sql='SELECT co_route FROM roundcover WHERE m_id="怪物猎人世界"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    duku:function (fn) {
        var sql='SELECT co_route FROM roundcover WHERE m_id="读库"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    people:function (fn) {
        var sql='SELECT co_route FROM roundcover WHERE m_id="怪物猎人XX"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },

    four:function (fn) {
        var sql='SELECT co_route FROM roundcover WHERE m_id="生化危机"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    five:function (fn) {
        var sql='SELECT co_route FROM roundcover WHERE m_id="北通游戏手柄"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    six:function (fn) {
        var sql='SELECT co_route FROM roundcover WHERE m_id="微软中国"';

        db.query(sql,function (err,data) {
            fn(err,data);
        })
    },



};

module.exports=roundModel;