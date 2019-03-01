



var express=require('express');
var shopController=require('./../controller/shopController');

var shopRouter=express.Router();


shopRouter.route('/shopround').get(shopController.shopround);
shopRouter.route('/wishshoproundone').get(shopController.wishshoproundone);
shopRouter.route('/shopcartRound').get(shopController.shopcartRound);

shopRouter.route('/payorderadd').get(shopController.payorderadd);






module.exports=shopRouter;


