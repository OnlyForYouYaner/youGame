var roundOrderModel=require('../model/roundOrderModel.js');
var roundOrderController={


    changeRound:function (req,res) {
        roundOrderModel.changeRound(req.query.a_phone,req.query.a_name,req.query.inTheArea,req.query.postalcode,req.query.u_id,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                res.send(data);
            }
        })
    },
    getSumPage:function (req,res) {
        roundOrderModel.getSumPage(function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                // console.log(data);
                res.send({error:0,count:Math.ceil(data[0].num)});
            }
        })
    },
    getEveryPage:function (req,res) {
        roundOrderModel.getEveryPage(req.query.page,req.query.k,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:arr});
            }
        })
    },
    getOnePage:function (req,res) {
        roundOrderModel.getOnePage(req.query.page,function (err,data) {
            if(err){
                console.log('数据库错误')
            }else{
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                // console.log(data);
                res.send({error:0,data:arr});
            }
        })
    },


}



module.exports=roundOrderController;