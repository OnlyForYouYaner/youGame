var personalModel=require('./../model/UtieModel.js');
var personalController={
    //U帖内容
    content:function (req,res) {
        personalModel.content(req.query.b,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    PersonalInformation:function (req,res) {
        personalModel.PersonalInformation(req.query.b,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    GroupNameOne:function (req,res) {
        personalModel.GroupNameOne(req.query.b,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    LeavingAmessage:function (req,res) {
        personalModel.LeavingAmessage(req.query.b,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    AddTo:function (req,res) {
        personalModel.AddTo(req.query.a,req.query.b,req.query.src,req.query.give,req.query.time,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错'+err)
            }else {
                // console.log(data);
                res.send(data)
            }
        });
    },
    GiveTheThumbsUp:function (req,res) {
        personalModel.GiveTheThumbsUp(req.query.b,req.query.ms,req.query.ma,function (err,data) {
            // console.log(req.query.b,req.query.ms,req.query.ma);
            if(err){
                console.log('数据库报错'+err)
                // console.log(2)
            }else {
                // console.log(data);
                // console.log(11)
                res.send(data)
            }
        });
    },
    Collection:function (req,res) {
        personalModel.Collection(req.query.b,function (err,data) {
            // console.log(req.query.b,req.query.ms,req.query.ma);
            if(err){
                console.log('数据库报错'+err)
                // console.log(2)
            }else {
                //console.log(data);
                // console.log(11)
                res.send(data)
            }
        });
    },
    CollectionYes:function (req,res) {
        personalModel.CollectionYes(req.query.b,req.query.a,function (err,data) {
            // console.log(req.query.b,req.query.ms,req.query.ma);
            if(err){
                console.log('数据库报错'+err)
                // console.log(2)
            }else {
                //console.log(data);
                // console.log(11)
                res.send(data)
            }
        });
    },
    CollectionY:function (req,res) {
        personalModel.CollectionY(req.query.b,req.query.a,function (err,data) {
            // console.log(req.query.b,req.query.ms,req.query.ma);
            if(err){
                console.log('数据库报错'+err)
                // console.log(2)
            }else {
                //console.log(data);
                // console.log(11)
                res.send(data)
            }
        });
    },
    CollectionN:function (req,res) {
        personalModel.CollectionN(req.query.b,req.query.a,function (err,data) {
            // console.log(req.query.b,req.query.ms,req.query.ma);
            if(err){
                console.log('数据库报错'+err)
                // console.log(2)
            }else {
                // console.log(data);
                // console.log(11)
                res.send(data)
            }
        });
    },
    RepostThumbs:function (req,res) {
        personalModel.RepostThumbs(req.query.id,req.query.zx,req.query.zm,function (err,data) {
            // console.log(req.query.id,req.query.zx,req.query.zm);
            if(err){
                console.log('数据库报错'+err)
                // console.log(2)
            }else {
                // console.log(data);
                // console.log(11)
                res.send(data)
            }
        });
    },
};
module.exports=personalController;