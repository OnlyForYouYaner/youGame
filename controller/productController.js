var productModel=require('../model/productModel');

var productController={

    product:function (req,res) {
        productModel.product(req.query.ID,function (err,data) {
            if (err) {
                console.log('数据库错误')
            }else {
                res.send({error: 0,data:data});
                // console.log(data)
            }
        })
    },
    addMessage:function (req,res) {
        productModel.addMessage(req.query.UID,req.query.GID,req.query.fen,req.query.nei,req.query.t,function (err,data) {
            if (err) {
                console.log('数据库错误')
            }else {
                res.send({error: 0,data:data});
                // console.log(data)
            }
        })
    },


    gameLanguage:function (req,res) {
        productModel.gameLanguage(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    gameSys:function (req,res) {
        productModel.gameSys(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    gameHotRe:function (req,res) {
        productModel.gameHotRe(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    gameMeU:function (req,res) {
        productModel.gameMeU(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    gameMeN:function (req,res) {
        productModel.gameMeN(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    gameNewRe:function (req,res) {
        productModel.gameNewRe(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    thumbsUp:function (req,res) {
        productModel.thumbsUp(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    thumbsDown:function (req,res) {
        productModel.thumbsDown(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});
                // console.log(data);
            }
        })
    },
    gameAddCart:function (req,res) {
        productModel.gameSelCart(req.query.UID,req.query.GID,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                if(data.length){
                    res.send({"error":1,"data":"已存在于购物车"})
                }else{
                    productModel.gameAddCart(req.query.UID,req.query.GID,function (err,data) {
                        if(err){
                            console.log('数据库错误')
                        }else{
                            res.send({"error":0,"data":"成功加入购物车"})
                        }
                    });
                }
            }
        })
    },
    gameSelWish:function(req,res){
        productModel.gameSelWish(req.query.UID,req.query.GID,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else {
                if(data.length){
                    res.send({error:0,data:data})
                }else {
                    res.send({error:1,data:data})
                }

            }
        })
    },
    gameAddWish:function (req,res) {
        productModel.gameSelWish(req.query.UID,req.query.GID,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                if(data.length){
                    productModel.gameJWish(req.query.UID,req.query.GID,function (err,data){
                        if(err){
                            console.log('数据库错误')
                        }else{
                            res.send({"error":1,"data":"删除成功"})
                        }
                    })
                }else{
                    productModel.gameAddWish(req.query.UID,req.query.GID,function (err,data) {
                        if(err){
                            console.log('数据库错误')
                        }else{
                            res.send({"error":0,"data":"成功加入购物车"})
                        }
                    });
                }
            }
        })
    },
};






module.exports=productController;