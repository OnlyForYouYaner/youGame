/**
 * Created by Administrator on 2018/12/8.
 */
var orderModel=require('../model/orderModel.js');
var orderController={


    orderround:function (req,res) {
        orderModel.orderround(req.query.mid,function (err,data) {
            if(err){
                console.log(err)
            }else{

                res.send(data);
            }
        })
    },
    ordernum:function (req,res) {
        orderModel.ordernum(req.query.mid,function (err,data) {
            if(err){
                console.log(err)
            }else{

                res.send(data);
            }
        })
    },
    gemesaddone:function (req,res) {
        orderModel.gemesaddone(req.query.gid,function (err,data) {
            if(err){
                console.log(err)
            }else{

                res.send(data);
            }
        })
    },
    getaddressone:function (req,res) {
        orderModel.getaddressone(req.query.uid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{

                res.send(data);
            }
        })
    },
    payorderaddgames:function (req,res) {
        orderModel.payorderaddgames(req.query.uid,req.query.gid,req.query.time,req.query.ordernum,function (err,data) {
            if(err){
                console.log(err)
            }else{

                res.send(data);
            }
        })
    },
    gamecartone:function (req,res) {
        orderModel.gamecartone(req.query.gid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(req.query.gid);
                console.log(data);

                res.send(data);
            }
        })
    },
    gamessumprice:function (req,res) {
        orderModel.gamessumprice(req.query.gid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(req.query.gid);
                console.log(data);

                res.send(data);
            }
        })
    },
    roundcartsum:function (req,res) {
        orderModel.roundcartsum(req.query.mid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(req.query.gid);
                console.log(data);

                res.send(data);
            }
        })
    },
    roundcartone:function (req,res) {
        orderModel.roundcartone(req.query.mid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(req.query.gid);
                console.log(data);

                res.send(data);
            }
        })
    },
    gamecartoneadd:function (req,res) {
        orderModel.gamecartoneadd(req.query.uid,req.query.gid,req.query.time,req.query.ordernum,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(req.query.gid);
                console.log(data);

                res.send(data);
            }
        })
    },
    roundcartoneadd:function (req,res) {
        orderModel.roundcartoneadd(req.query.uid,req.query.mid,req.query.time,req.query.ordernum,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(req.query.gid);
                console.log(data);

                res.send(data);
            }
        })
    },



}



module.exports=orderController;