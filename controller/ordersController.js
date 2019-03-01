/**
 * Created by 华辉 on 2018/12/8 0008.
 */
var ordersModel=require('../model/ordersModel.js');

var ordersController={
    orderfind:function (req,res) {
        ordersModel.orderfind(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    orderfind2:function (req,res) {
        ordersModel.orderfind2(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    orderough:function (req,res) {
        ordersModel.orderough(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    orderough2:function (req,res) {
        ordersModel.orderough2(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    orderover:function (req,res) {
        ordersModel.orderover(function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    orderover2:function (req,res) {
        ordersModel.orderover2(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    orderzhifu:function (req,res) {

        ordersModel.orderzhifu(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },

};
module.exports=ordersController;