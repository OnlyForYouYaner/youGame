/**
 * Created by 华辉 on 2018/12/11 0011.
 */
/**
 * Created by 华辉 on 2018/12/11 0011.
 */
var communityModel=require('../model/communityModel.js');

var communityController={
    postfind:function (req,res) {
        communityModel.postfind(req.query.userid,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    postfind2:function (req,res) {
        communityModel.postfind2(req.query.userid,function (err,data) {
            if(err){
                console.log('数据库错误'+err)
            }else{
                // console.log(data);
                res.send(data);

            }
        })
    },
    useright: function (req, res) {
        communityModel.useright(req.query.userid, function (err, data) {
            if (err) {
                console.log('数据库错误' + err)
            } else {
                // console.log(data);
                res.send(data);

            }
        })
    }
};
module.exports=communityController;