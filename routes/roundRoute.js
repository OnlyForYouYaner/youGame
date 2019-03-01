/**
 * Created by Administrator on 2018/12/6.
 */
//引入
var express=require('express');
var roundController=require('./../controller/roundController');

//定义的模块
var roundRouter=express.Router();

roundRouter.route('/two').get(roundController.two);
roundRouter.route('/roundindex').get(roundController.roundindex);
roundRouter.route('/coverone').get(roundController.coverone);
roundRouter.route('/duku').get(roundController.duku);
roundRouter.route('/people').get(roundController.people);
roundRouter.route('/three').get(roundController.three);
roundRouter.route('/four').get(roundController.four);
roundRouter.route('/dange').get(roundController.dange);
roundRouter.route('/five').get(roundController.five);
roundRouter.route('/handle').get(roundController.handle);
roundRouter.route('/six').get(roundController.six);
roundRouter.route('/soft').get(roundController.soft);
roundRouter.route('/hot').get(roundController.hot);
roundRouter.route('/limi').get(roundController.limi);
roundRouter.route('/roundbrand').get(roundController.roundbrand);
roundRouter.route('/roundtag').get(roundController.roundtag);
roundRouter.route('/roundtype').get(roundController.roundtype);
roundRouter.route('/roundmore').get(roundController.roundmore);


//导出模块
module.exports=roundRouter;