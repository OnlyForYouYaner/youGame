var officialDetailsModel=require('../model/officialDetailsmodel.js');
var officialDetailsController={
    officialDetailsname:function (req,res) {
        officialDetailsModel.officialDetailsname(req.query.id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(req.query.id);
                res.send({error:0,content:data});

            }
        })
    },
    teamFocusedOn1:function (req,res) {
        // console.log('曹尼玛');
        officialDetailsModel.teamFocusedOn1(req.query.focus,req.query.Id,req.query.userID,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(req.query.focus,req.query.Id);
                res.send({error:0,content:data});

            }
        })
    },
    membership1:function (req,res) {
        officialDetailsModel.membership1(req.query.memberID,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data);
            }
            // console.log(req.query.ID)
        })
    },
    postsNumber1:function (req,res) {
        officialDetailsModel.postsNumber1(req.query.uId,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    userName:function (req,res) {
        officialDetailsModel.userName(req.query.userid,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    yougameMember:function (req,res) {
        officialDetailsModel.yougameMember(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    fusheMember:function (req,res) {
        officialDetailsModel.fusheMember(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    jzyMember:function (req,res) {
        officialDetailsModel.jzyMember(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    yougamePostnum:function (req,res) {
        officialDetailsModel.yougamePostnum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    fushePostnum:function (req,res) {
        officialDetailsModel.fushePostnum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    jzyPostnum:function (req,res) {
        officialDetailsModel.jzyPostnum(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    yougameDate:function (req,res) {
        officialDetailsModel.yougameDate(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    fusheDate:function (req,res) {
        officialDetailsModel.fusheDate(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    jzyDate:function (req,res) {
        officialDetailsModel.jzyDate(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    teamPostContent:function (req,res) {
        officialDetailsModel.teamPostContent(req.query.a_id,function (err,data) {
            // console.log(res)
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    newest:function (req,res) {
        officialDetailsModel.newest(req.query.p_id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                res.send(data);

            }
        })
    },
    recommended:function (req,res) {
        officialDetailsModel.recommended(req.query.p_id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(req.query.id);
                res.send(data);

            }
        })
    },
    choiceness:function (req,res) {
        officialDetailsModel.choiceness(req.query.p_id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(req.query.id);
                res.send(data);

            }
        })
    },
    postmessageNum:function (req,res) {
        officialDetailsModel.postmessageNum(req.query.Num_id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(req.query.id);
                res.send(data);

            }
        })
    },

};
module.exports=officialDetailsController;