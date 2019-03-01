/**
 * Created by Administrator on 2018/12/7.
 */
var shopModel=require('../model/shopModel.js');
var shopController={
    shopround:function (req,res) {
        shopModel.shopround(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误111')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },

    wishshoproundone:function (req,res) {
        shopModel.wishshoproundone(req.query.shopid,req.query.uid,function (err,data) {
            if(err){
                console.log('数据库错误222')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },

    shopcartRound:function (req,res) {
        shopModel.shopcartRound(req.query.uid,req.query.mid,req.query.num,function (err,data) {
            if(err){
                console.log('数据库错误3')
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },


    payorderadd:function (req,res) {
        shopModel.payorderadd(req.query.uid,req.query.mid,req.query.time,req.query.number,req.query.ordernum,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },


}



module.exports=shopController;