/**
 * Created by 华辉 on 2018/12/10 0010.
 */
/**
 * Created by 华辉 on 2018/12/9 0009.
 */
/**
 * Created by 华辉 on 2018/12/8 0008.
 */
var PersonalCenterModel=require('../model/PersonalCenterModel.js');

var PersonalController={
    Informationfind:function (req,res) {
        PersonalCenterModel.Informationfind(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    beathfind:function (req,res) {
        PersonalCenterModel.beathfind(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    addressfind:function (req,res) {
        PersonalCenterModel.addressfind(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    addressfind1:function (req,res) {
        PersonalCenterModel.addressfind1(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    countadres:function (req,res) {
        PersonalCenterModel.countadres(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    modifybtn:function (req,res) {
        PersonalCenterModel.modifybtn(req.query.a,req.query.b,req.query.c,req.query.d,req.query.e,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    delbtn:function (req,res) {
        PersonalCenterModel.delbtn(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);

            }
        })
    },
    addaddress:function (req,res) {
        PersonalCenterModel.addaddress(req.query.na,req.query.ph,req.query.ad,req.query.co,req.query.te,req.query.ina,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    addressnum:function (req,res) {
        PersonalCenterModel.addressnum(function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);

            }
        })
    },
    deladdress:function (req,res) {
        PersonalCenterModel.deladdress(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);

            }
        })
    }
};
module.exports=PersonalController;