/**
 * Created by Administrator on 2018/12/6.
 */
var roundModel=require('../model/roundModel.js');

var roundController={
    roundindex:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
       roundModel.roundindex(function (err,data) {
            if(err){
                console.log('数据库错误11')
            }else{
               // console.log(data);
               res.send(data);
            }
        })
    },
    coverone:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.coverone(function (err,data) {
            if(err){
                console.log('数据库错误22')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    duku:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.duku(function (err,data) {
            if(err){
                console.log('数据库错误33')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    two:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.two(function (err,data) {
            if(err){
                console.log('数据库错误44')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    people:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.people(function (err,data) {
            if(err){
                console.log('数据库错误55')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    three:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.three(function (err,data) {
            if(err){
                console.log('数据库错误66')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    dange:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.dange(function (err,data) {
            if(err){
                console.log('数据库错误77')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    four:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.four(function (err,data) {
            if(err){
                console.log('数据库错误88')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    five:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.five(function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    handle:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.handle(function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    six:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.six(function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    soft:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.soft(function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    hot:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.hot(function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    limi:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.limi(function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    roundbrand:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.roundbrand(req.query.brand,function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    roundtag:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.roundtag(req.query.tag,function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    roundtype:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.roundtype(req.query.type,function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    roundmore:function (req,res) {
        ///add?content=xxxx
        //返回:{error:0,id:1}     //0 成功   1失败
        roundModel.roundmore(req.query.tage,function (err,data) {
            if(err){
                console.log('数据库错误99')
            }else{
                res.send(data);
            }
        })
    },



};

module.exports=roundController;