
var express=require('express');
var orderController=require('./../controller/orderController');

var orderRouter=express.Router();


orderRouter.route('/orderround').get(orderController.orderround);
orderRouter.route('/ordernum').get(orderController.ordernum);
orderRouter.route('/gemesaddone').get(orderController.gemesaddone);
orderRouter.route('/getaddressone').get(orderController.getaddressone);
orderRouter.route('/payorderaddgames').get(orderController.payorderaddgames);
orderRouter.route('/gamecartone').get(orderController.gamecartone);
orderRouter.route('/gamessumprice').get(orderController.gamessumprice);
orderRouter.route('/roundcartsum').get(orderController.roundcartsum);
orderRouter.route('/roundcartone').get(orderController.roundcartone);
orderRouter.route('/gamecartoneadd').get(orderController.gamecartoneadd);
orderRouter.route('/roundcartoneadd').get(orderController.roundcartoneadd);






module.exports=orderRouter;
