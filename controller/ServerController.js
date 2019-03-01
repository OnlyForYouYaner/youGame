var ServerModel=require('../model/ServerModel.js');

var ServerController= {
    Serverfind: function (req, res) {
        ServerModel.Serverfind(function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
    Serverfind2: function (req, res) {
        ServerModel.Serverfind2(function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
    Serverfind3: function (req, res) {
        ServerModel.Serverfind3(function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
    Serverfind4: function (req, res) {
        ServerModel.Serverfind4(req.query.id,function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
    Serverfind5: function (req, res) {
        ServerModel.Serverfind5(req.query.id,function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
    Serverfind6: function (req, res) {
        ServerModel.Serverfind6(req.query.userid,req.query.username,req.query.reply,req.query.replydate,function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
    Serverfind7: function (req, res) {
        ServerModel.Serverfind7(req.query.username,req.query.message,req.query.date,req.query.replyid,function (err, data) {
            if (err) {
                console.log('数据库错误')
            } else {
                console.log(data);
                res.send(data);

            }
        })

    },
}
module.exports=ServerController;