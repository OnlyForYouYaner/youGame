/**
 * Created by Administrator on 2018/12/10.
 */
var wishroundModel=require('../model/wishroundModel.js');
var wishroundController={

    wishload:function (req,res) {
        wishroundModel.wishload(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({error:0,data:data});
            }
        })
    },
    wishgameload:function (req,res) {
        wishroundModel.wishgameload(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({error:0,data:data});
            }
        })
    },
    wishdel:function (req,res) {
        wishroundModel.wishdel(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({error:0,data:data});
            }
        })
    },
    wishdelgame:function (req,res) {
        wishroundModel.wishdelgame(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send({error:0,data:data});
            }
        })
    },
    wishadd:function (req,res) {
        wishroundModel.wishadd(req.query.uid,req.query.mid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                res.send({error:0,data:data});
            }
        })
    },
    wishaddgame:function (req,res) {
        wishroundModel.wishaddgame(req.query.uid,req.query.mid,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(data);
                res.send({error:0,data:data});
            }
        })
    },
    wishfind:function (req,res) {
        wishroundModel.wishfind(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    },
    wishfind2:function (req,res) {
        wishroundModel.wishfind2(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    }



}

module.exports=wishroundController;