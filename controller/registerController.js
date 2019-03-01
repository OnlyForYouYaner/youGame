var registerModel=require('../model/registerModel.js');

var registerController={
    register:function (req,res) {
        registerModel.register(req.query.email,req.query.pass,req.query.name,req.query.number,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{

                res.send(data);

            }
        })
    },
    registerph:function (req,res) {
        registerModel.registerph(req.query.phone,req.query.pass,req.query.name,req.query.number,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{

                res.send(data);

            }
        })
    },

};
module.exports=registerController;