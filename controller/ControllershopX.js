var shopXModel=require('./../model/ModelshopX.js');
var shopXController={
    roundX:function (req,res) {
       shopXModel.roundX(function (err,data) {
            //console.log(req.query.a);
            if(err){
                console.log('数据库报错121')
            }else {

                res.send(data)
            }
        });
    },
    searchnumX:function (req,res) {
        shopXModel.searchpaX(function (err,data) {
            if(err){
                console.log('数据库错误'+err);
            }else{
                res.send({error:0,count:Math.ceil(data[0].num)})
            }
        });
    },
    searchthisX:function (req,res) {
        shopXModel.searchthisX(req.query.page,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else{
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data:arr})
            }
        });
    },
    changeEditX:function(req,res){
        shopXModel.changeEditX(req.query.m_name,req.query.m_cost,req.query.m_type, req.query.m_price,
            req.query.m_state,req.query.m_surplus,req.query.m_trademark,req.query.m_tag,req.query.m_id,
            function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                res.send(data);
            }
        })
    },
    addX:function(req,res){
        shopXModel.addX(req.query.m_id,req.query.m_name,req.query.m_cost,req.query.m_type,
            req.query.m_price,req.query.m_surplus,req.query.m_trademark,req.query.m_tag,req.query.img,
            function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                res.send(data);
            }
        })
    },
    addinformtion:function(req,res){
        shopXModel.addinformtion(req.query.xmid,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                res.send(data);
            }
        })
    },
    addxid:function(req,res){
        shopXModel.addxid(req.query.xname,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                console.log(data);
                res.send(data);
            }
        })
    },

    upperX:function(req,res){
        shopXModel.upperX(req.query.m_id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                res.send(data);
            }
        })
    },
    lowerX:function(req,res){
        shopXModel.lowerX(req.query.m_id,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                res.send(data);
            }
        })
    },
    loginoneX:function (req,res) {
        shopXModel.loginoneX(req.query.k,req.query.page,req.query.so,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else if (req.query.so==1){
                var arr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:arr})
            }
        });
        shopXModel.logintwoX(req.query.k,req.query.page,req.query.so,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else if (req.query.so==2){
                var brr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:brr})
            }
        });
        shopXModel.loginthreeX(req.query.k,req.query.page,req.query.so,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else if (req.query.so==3){
                var crr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:crr})
            }
        });
        shopXModel.loginfourX(req.query.k,req.query.page,req.query.so,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else if (req.query.so==0){
                var drr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:drr})
            }
        });
        shopXModel.loginfiveX(req.query.k,req.query.page,req.query.so,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else if (req.query.so==4){
                var frr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:frr})
            }
        });
        shopXModel.loginsixX(req.query.k,req.query.page,req.query.so,function (err,data) {
            if (err){
                console.log('数据库错误'+err);
            } else if (req.query.so==5){
                var frr=(data.slice((req.query.page-1)*5,5*req.query.page));
                res.send({error:0,data,data1:frr})
            }
        });
    }
};
module.exports=shopXController;