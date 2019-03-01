var searchModel=require('./../model/searchModel.js');
var searchController={
    searchUtie:function (req,res) {
        searchModel.searchU(req.query.data1,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchallteam:function (req,res) {
        searchModel.searchallteam(req.query.Id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchuser:function (req,res) {
        searchModel.searchuser(req.query.Id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchgames:function (req,res) {
        searchModel.searchgames(req.query.data,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchallgames:function (req,res) {
        searchModel.searchallgames(req.query.Id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchusername:function (req,res) {
        searchModel.searchusername(req.query.name,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchallteamname:function (req,res) {
        searchModel.searchallteamname(req.query.name,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchallteampeo:function (req,res) {
        searchModel.searchallteampeo(req.query.Id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchallteamutie:function (req,res) {
        searchModel.searchallteamutie(req.query.Id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchusergame:function (req,res) {
        searchModel.searchusergame(req.query.Id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchallgamesright:function (req,res) {
        searchModel.searchallgemesright(function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchG:function (req,res) {
        searchModel.searchG(req.query.id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
    searchR:function (req,res) {
        searchModel.searchR(req.query.id,function (err,data) {
            if(err){
                console.log('错误',err)
            }else {
                console.log(data);
                res.send({error:0,data:data})
            }
        })
    },
};

module.exports=searchController;