var demoModel=require('../model/demoModel.js');
var signModel=require('../model/signModel.js');

var demoController={

    demo:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        console.log(user);
        demoModel.getlunbo(function (err,data) {
            demoModel.getround(function (err,data1) {
                demoModel.getUtie(function (err,data2) {
                    res.render('demo',{
                        data:data,
                        data1:data1,
                        user:user,
                        data2:data2
                    })
                })
            });
        });
    },

    newgame:function(req,res){
        demoModel.newgame(function (err,data){
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    pricegame:function(req,res){
        demoModel.pricegame(function (err,data){
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});

            }
        })
    },

    allgametop:function(req,res){
        demoModel.allgametop(function (err,data){
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    newgametime:function (req,res) {
        demoModel.newgameTime(req.query.Id,function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    demolallteam:function (req,res) {
        demoModel.demoallteam(function (err,data) {
            if (err){
                console.log('数据库错误')
            } else {
                res.send({error: 0,data:data});

            }
        })
    },
    indexSearch:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('indexSearch',{
            user:user
        })

    },
    allTeam:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('allTeam',{

            user:user
        });
    },
    officialDetails:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('officialDetails',{

            user:user
        });
    },


    games:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('games',{

            user:user
        })
    },
    order:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('order',{

            user:user
        });
    },
    products:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('products',{

            user:user
        });
    },
    pay:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('pay',{

            user:user
        });
    },
    releasePost:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('releasePost',{

            user:user
        });
    },
    round:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('round',{

            user:user
        });
    },
    shop:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('shop',{
            user:user
        });
    },
    shoppingCart:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('shoppingCart',{

            user:user
        });
    },
    Utie:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('Utie',{

            user:user
        });
    },
    wish:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('wish',{

            user:user
        });
    },
    community:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('community',{

            user:user
        });
    },
    personal:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('personal',{

            user:user
        });
    },
    personalCenter:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('personalCenter',{

            user:user
        });
    },
    Signin:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('Signin',{

            user:user
        })

    },
    register:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('register',{

            user:user
        })
    },
    findPass:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('findPass',{

            user:user
        })
    },
    OrderDetails:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('OrderDetails',{

            user:user
        });
    },
    paytwo:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('paytwo',{

            user:user
        });
    },
    payone:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('payone',{

            user:user
        });
    },
    orderone:function (req,res) {
        var user='';
        if(req.session.user){
            user=req.session.user;
        }
        res.render('orderone',{

            user:user
        });
    },


};


module.exports=demoController;