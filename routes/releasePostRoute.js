var express=require('express');
var releasePostcontroller=require('../controller/releasePostController.js');
//定义模块
var releasePostRouter=express.Router();

releasePostRouter.route('/sendPost').get(releasePostcontroller.sendPost);
//导出模块
module.exports=releasePostRouter;