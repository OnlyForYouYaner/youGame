var personalModel=require('./../model/ModelForum.js');
var personalController={
    forum:function (req,res) {
       personalModel.forum(req.query.page,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data:arr})
            }
        });
    },
    forumunm:function (req,res) {
        personalModel.forumunm(function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                res.send({error:0,count:Math.ceil(data[0].num)})
            }
        });
    },
    comment:function (req,res) {
        personalModel.loginidone(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==1){
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:arr})
            }
        });
        personalModel.loginidtwo(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==2){
                var brr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:brr})
            }
        });
        personalModel.loginidthree(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==3){
                var crr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:crr})
            }
        });
        personalModel.loginidfour(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==0){
                var drr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:drr})
                // console.log(drr)
            }
        });
    },
    delete:function (req,res) {
        personalModel.delete(req.query.id,function (err,data) {
            //console.log(req.query.a);
            if(err){
                res.send({error:1})
                // console.log('数据库报错');
            }else {
                res.send({error:0})
            }
        });
    },
    Leaving:function (req,res) {
        personalModel.Leaving(req.query.id,function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错')
            }else {
                res.send({error:0,data:data})
            }
        });
    },
    deleteLeaving:function (req,res) {
        personalModel.deleteLeaving(req.query.id,function (err,data) {
            // console.log(req.query.id);
            if(err){
                console.log('数据库报错')
            }else {
                res.send({error:0})
            }
        });
    },
};
module.exports=personalController;