var gameModel=require('../model/gameModel');

var gameController={
    newGameCount:function (req,res) {
        gameModel.newGameCount(function (err,data) {
            if(err){
                console.log('数据错误')
            }else {
                res.send({error:0,count:Math.ceil(data[0].num/10)})
            }
        })
    },
    AScore:function (req,res) {
        gameModel.AScore(req.query.GID,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else {
                res.send({error:0,data:data})
            }
        });
    },
    newGameCounts:function (req,res) {
        gameModel.newGameCount(function (err,data) {
            if(err){
                console.log('数据错误')
            }else {
                res.send({error:0,count:data[0]})
            }
        })
    },
    newGameContent:function (req,res) {
        gameModel.newGameContent(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                var arr=data.slice((req.query.page-1)*10,10*req.query.page);
                // console.log('arr');
                res.send({error: 0,data:arr})
            }
        })
    },
    newGameContents:function (req,res) {
        gameModel.newGameContents(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                var arr=data.slice((req.query.page-1)*5,5*req.query.page);
                // console.log(arr);
                res.send({error: 0,data:arr})
            }
        })
    },
    gameType:function (req,res) {
        gameModel.gameType(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    grade:function (req,res) {
        gameModel.grade(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                var arr=data.slice((req.query.page-1)*10,10*req.query.page);
                // console.log('arr');
                res.send({error: 0,data:arr})
            }
        })
    },
    ourWish:function (req,res) {
        gameModel.ourWish(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                var arr=data.slice((req.query.page-1)*10,10*req.query.page);
                // console.log('arr');
                res.send({error: 0,data:arr})
            }
        })
    },
    downPrice:function (req,res) {
        gameModel.downPrice(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                var arr=data.slice((req.query.page-1)*10,10*req.query.page);
                // console.log('arr');
                res.send({error: 0,data:arr})
            }
        })
    },
    upPrice:function (req,res) {
        gameModel.upPrice(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                var arr=data.slice((req.query.page-1)*10,10*req.query.page);
                // console.log('arr');
                res.send({error: 0,data:arr})
            }
        })
    },
    upper:function (req,res) {
        gameModel.upper(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data})
            }
        })
    },
    Lower:function (req,res) {
        gameModel.Lower(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data})
            }
        })
    },
    GType:function (req,res) {
        gameModel.GType(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data})
            }
        })
    },
    GOs:function (req,res) {
        gameModel.GOs(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data})
            }
        })
    },
    GLanguage:function (req,res) {
        gameModel.GLanguage(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data})
            }
        })
    },
    editG:function (req,res) {
        gameModel.editG(req.query.id,req.query.gName,req.query.EName,req.query.gTime,req.query.price,req.query.sPrice,req.query.pub,req.query.dev,req.query.intr,req.query.sys,req.query.mem,req.query.pro,req.query.ima,req.query.sou,req.query.disk,req.query.dX,req.query.int,req.query.copy,req.query.sta,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data})
            }
        })
    },
    addG:function (req,res) {
        gameModel.addG(req.query.gName,req.query.EName,req.query.gTime,req.query.price,req.query.sPrice,req.query.pub,req.query.dev,req.query.intr,req.query.sys,req.query.mem,req.query.pro,req.query.ima,req.query.sou,req.query.disk,req.query.dX,req.query.int,req.query.copy,req.query.sta,req.query.img1,req.query.img2,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    addT:function(req,res){
        gameModel.addT(req.query.id,req.query.type,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    addO:function(req,res){
        gameModel.addO(req.query.id,req.query.os,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    addL:function(req,res){
        gameModel.addL(req.query.id,req.query.language,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    dedT:function(req,res){
        gameModel.dedT(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});
            }
        })
    },
    dedO:function(req,res){
        gameModel.dedO(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});
            }
        })
    },
    dedL:function(req,res){
        gameModel.dedL(req.query.id,function (err,data) {
            if (err){
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0,data:data});
            }
        })
    },

    GameContents:function (req,res) {
        gameModel.GameContents(req.query.k,req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else {
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:arr})
            }
        });
    },
    gamesfind:function (req,res) {
        gameModel.gamesfind(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                console.log(data);
                res.send(data);

            }
        })

    }

};

module.exports=gameController;