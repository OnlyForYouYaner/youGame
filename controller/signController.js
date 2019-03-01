var signModel=require('../model/signModel.js');

var signController={
         signin:function (req,res) {
             signModel.login(req.query.luser,req.query.lpass,function (err,data) {
                 if(err){
                     console.log('数据库错误'+err);
                 }else{
                     if(data.length){
                         // req.session.user=req.query.luser;
                         req.session.user=data[0];
                         res.send({"state":0,"context":"成功"});
                     }else{
                         res.send({"state":1,"context":"账号名或密码错误"});
                     }
                 }
             });
         },
    phsignin:function (req,res) {
        signModel.phlogin(req.query.luser,req.query.lpass,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                if(data.length){
                    // req.session.user=req.query.luser;
                    req.session.user=data[0];
                    res.send({"state":0,"context":"成功"});
                }else{
                    res.send({"state":1,"context":"账号名或密码错误"});
                }
            }
        });
    },
    signinid:function (req,res) {
        signModel.loginid(function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                    res.send(data);
            }
        });
    },
    signinidone:function (req,res) {
        signModel.loginidone(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==1){
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:arr})
            }
        });
        signModel.loginidtwo(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==2){
                var brr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:brr})
            }
        });
        signModel.loginidthree(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==3){
                var crr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:crr})
            }
        });
        signModel.loginidfour(req.query.k,req.query.page,req.query.so,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else if(req.query.so==0){
                var drr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:drr})
            }
        });
    },
    searchcuspage:function (req,res) {
        signModel.searchcuspage(req.query.num,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                res.send({error:0,data})
            }
        });
    },
    searchcusthis:function (req,res) {
        signModel.searchid1(req.query.num,req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                var drr=(data.slice((req.query.page-1)*6,6*req.query.page));
                res.send({error:0,data,data1:drr})
            }
        });
        // signModel.searchid2(req.query.num,function (err,data2) {
        //     if(err){
        //         console.log('数据库错误'+err);
        //     }else{
        //         res.send(data2);
        //     }
        // });
    },
    searchpage:function(req,res){
        signModel.searchpa(function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                res.send({error:0,count:Math.ceil(data[0].num)})
            }
        });
    },
    searchpageth:function(req,res){
        signModel.searchpath(req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data:arr})
            }
        });
    },
    managelog:function(req,res){
        signModel.manage(req.query.user,req.query.pass,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
                alert('账号或者密码错误')
            }else{
                res.send({error:0,data:data})
            }
        });
    },
        exit:function (req,res) {
        var a=req.query.id;
        req.session.destroy();
        res.redirect(a);

        }
};

module.exports=signController;