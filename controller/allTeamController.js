var allTeamModel=require('../model/allTeamModel.js');

var allTeamController={
    allTeamsearch:function (req,res) {
        allTeamModel.allTeamsearch(req.query.text,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })

    },
    myTeam:function (req,res) {
        allTeamModel.myTeam(req.query.user_id,function (err,data) {
            // console.log(req.query,user_id);
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },

    newGameOnline:function (req,res) {
        allTeamModel.newGameOnline(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    actionAdventure:function (req,res) {
        allTeamModel.actionAdventure(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    rolePlay:function (req,res) {
        allTeamModel.rolePlay(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    shootingSports:function (req,res) {
        allTeamModel.shootingSports(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    strategySimulation:function (req,res) {
        allTeamModel.strategySimulation(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    sportRacing:function (req,res) {
        allTeamModel.sportRacing(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    other:function (req,res) {
        allTeamModel.other(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);


            }
        })
    },
    officialTeam:function (req,res) {
        allTeamModel.officialTeam(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data);

            }
        })
    },
    teamFocusedOn:function (req,res) {
        allTeamModel.teamFocusedOn(req.query.focus,req.query.index,req.query.userID,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(req.query.focus,req.query.index,req.query.userID);
                res.send(data);
                // console.log(data)

            }
        })
    },
    membership:function (req,res) {
        allTeamModel.membership(req.query.Name,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data);

            }
        })
    },
    postsNumber:function (req,res) {
        allTeamModel.postsNumber(req.query.groupID,function (err,data) {
            if(err){
                console.log('数据库错误',err)
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    }

};
module.exports=allTeamController;