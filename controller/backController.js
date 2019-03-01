var backModel=require('../model/backModel.js');

var backController={
    autostart:function (req,res) {
        backModel.autostart(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data);

            }
        })

    },

    roundordersum:function (req,res) {
        backModel.roundordersum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },

    gameordersum:function (req,res) {
        backModel.gameordersum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },

    gsum:function (req,res) {
        backModel.gsum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },

    msum:function (req,res) {
        backModel.msum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },
    msurplus:function (req,res) {
        backModel.msurplus(req.query.mid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },
    mcart:function (req,res) {
        backModel.mcart(req.query.mid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },
    msurplusone:function (req,res) {
        backModel.msurplusone(req.query.mid,req.query.number,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);

            }
        })

    },


};
module.exports=backController;