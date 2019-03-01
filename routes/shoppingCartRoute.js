var express=require('express');
var shoppingcartController=require('../controller/shoppingcartController.js');

var shoppingcartRouter=express.Router();


shoppingcartRouter.route('/shopcartload').get(shoppingcartController.shopcartload);
shoppingcartRouter.route('/shopcartdel').get(shoppingcartController.shopcartdel);
shoppingcartRouter.route('/shopcartgamedel').get(shoppingcartController.shopcartgamedel);
shoppingcartRouter.route('/shoppingcartadd').get(shoppingcartController.shoppingcartadd);
shoppingcartRouter.route('/shoppingcartgameadd').get(shoppingcartController.shoppingcartgameadd);
shoppingcartRouter.route('/shopcartchecked').get(shoppingcartController.shopcartchecked);
shoppingcartRouter.route('/shopcartcheckedg').get(shoppingcartController.shopcartcheckedg);
shoppingcartRouter.route('/shopcartall').get(shoppingcartController.shopcartall);
shoppingcartRouter.route('/shopcartgameall').get(shoppingcartController.shopcartgameall);
shoppingcartRouter.route('/shopcartgames').get(shoppingcartController.shopcartgames);






module.exports=shoppingcartRouter;
