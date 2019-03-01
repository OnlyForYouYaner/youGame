var gameOrderModel=require('../model/gameOrderModel.js');
var gameOrderController={

    changeGame:function (req,res) {
        gameOrderModel.changeGame(req.query.u_id,req.query.u_name,req.query.u_phone,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    },
    getSumGamePage:function (req,res) {
        gameOrderModel.getSumGamePage(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send({error:0,count:Math.ceil(data[0].num)});
            }
        })
    },
    //获取第一页
    getOneGamePage:function (req,res) {
        gameOrderModel.getOneGamePage(req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                // console.log(data);
                res.send({error:0,data1:arr});
            }
        })
    },
    getEveryGamePage:function (req,res) {
        gameOrderModel.getEveryGamePage(req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                // console.log(data);
                res.send({error:0,data,data1:arr});
            }
        })
    },


};



module.exports=gameOrderController;