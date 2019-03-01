var express=require('express');
var productController=require('../controller/productController');

var myRouter=express.Router();

myRouter.route('/product').get(productController.product);
myRouter.route('/gameLanguage').get(productController.gameLanguage);
myRouter.route('/gameSys').get(productController.gameSys);
myRouter.route('/gameHotRe').get(productController.gameHotRe);
myRouter.route('/gameMeU').get(productController.gameMeU);
myRouter.route('/gameMeN').get(productController.gameMeN);
myRouter.route('/gameNewRe').get(productController.gameNewRe);
myRouter.route('/thumbsUp').get(productController.thumbsUp);
myRouter.route('/thumbsDown').get(productController.thumbsDown);
myRouter.route('/gameAddCart').get(productController.gameAddCart);
myRouter.route('/gameAddWish').get(productController.gameAddWish);
myRouter.route('/gameSelWish').get(productController.gameSelWish);
myRouter.route('/addMessage').get(productController.addMessage);






module.exports=myRouter;