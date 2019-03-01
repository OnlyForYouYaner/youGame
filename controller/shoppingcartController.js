/**
 * Created by Administrator on 2018/12/10.
 */
var shoppingcartModel=require('../model/shoppingcartModel.js');
var shoppingcartController={

    shopcartload:function (req,res) {
        shoppingcartModel.shopcartload(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({error:0,data:data});
            }
        })
    },
    shopcartdel:function (req,res) {
        shoppingcartModel.shopcartdel(req.query.mid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data);
            }
        })
    },
    shopcartgamedel:function (req,res) {
        shoppingcartModel.shopcartgamedel(req.query.gid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(1);
                res.send({data:'清楚成功'});
            }
        })
    },
    shoppingcartadd:function (req,res) {
        shoppingcartModel.shoppingcartadd(req.query.uid,req.query.mid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({data:data});
            }
        })
    },
    shoppingcartgameadd:function (req,res) {
        shoppingcartModel.shoppingcartgameadd(req.query.uid,req.query.gid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({data:data});
            }
        })
    },
    shopcartchecked:function (req,res) {
        shoppingcartModel.shopcartchecked(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },
    shopcartcheckedg:function (req,res) {
        shoppingcartModel.shopcartcheckedg(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },
    shopcartall:function (req,res) {
        shoppingcartModel.shopcartall(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },
    shopcartgameall:function (req,res) {
        shoppingcartModel.shopcartgameall(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },
    shopcartgames:function (req,res) {
        shoppingcartModel.shopcartgames(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({data:data});
            }
        })
    },


}

module.exports=shoppingcartController;