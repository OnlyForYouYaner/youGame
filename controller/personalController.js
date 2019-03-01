var personalModel=require('./../model/personalModel.js');
var personalController={
    //获取个人消息
    centerLnformation:function (req,res) {
        personalModel.centerLnformation(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //游戏拥有信息
    centerGame:function (req,res) {
        personalModel.centerGame(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                res.send({error:0,data:data})
            }
        });
    },
    //关注小组
    centerGroup:function (req,res) {
        personalModel.centerGroup(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                // console.log(data);
                res.send(data)
            }
        });
    },
    //关注小组人数查询
    Total:function (req,res) {
        personalModel.Total(req.query.id,function (err,data) {
            console.log(req.query.id);
            if(err){
                console.log('数据库报错'+err)
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //关注小组帖子数查询
    Posts:function (req,res) {
        personalModel.Posts(req.query.id,function (err,data) {
            console.log(req.query.id);
            if(err){
                console.log('数据库报错'+err)
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //收藏帖子
    centerCollection:function (req,res) {
        personalModel.centerCollection(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //U帖
    centerPost:function (req,res) {
        personalModel.centerPost(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //点评
    centerComment:function (req,res) {
        personalModel.centerComment(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //评论
    centerSelection:function (req,res) {
        personalModel.centerSelection(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },
    //回复
    centerReply:function (req,res) {
        personalModel.centerReply(req.query.a,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                //console.log(data);
                res.send(data)
            }
        });
    },


};
module.exports=personalController;