var express=require('express');
var roundOrderController=require('./../controller/roundOrderController');

var roundorderRouter=express.Router();

roundorderRouter.route('/changeRound').get(roundOrderController.changeRound);
roundorderRouter.route('/getSumPage').get(roundOrderController.getSumPage);
roundorderRouter.route('/getEveryPage').get(roundOrderController.getEveryPage);
roundorderRouter.route('/getOnePage').get(roundOrderController.getOnePage);






module.exports=roundorderRouter;