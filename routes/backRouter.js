var express=require('express');
var backController=require('./../controller/backController.js');
//定义模块
var backRouter=express.Router();

backRouter.route('/autostart').get(backController.autostart);
backRouter.route('/roundordersum').get(backController.roundordersum);
backRouter.route('/gameordersum').get(backController.gameordersum);
backRouter.route('/gsum').get(backController.gsum);
backRouter.route('/msum').get(backController.msum);
backRouter.route('/msurplus').get(backController.msurplus);
backRouter.route('/mcart').get(backController.mcart);
backRouter.route('/msurplusone').get(backController.msurplusone);




//导出模块
module.exports=backRouter;