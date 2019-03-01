var express=require('express');

var demoController=require('./../controller/demoController.js');

var myRouter=express.Router();

myRouter.route('/demo.html').get(demoController.demo);
myRouter.route('/newgame').get(demoController.newgame);
myRouter.route('/pricegame').get(demoController.pricegame);

myRouter.route('/allgametop').get(demoController.allgametop);
myRouter.route('/Signin').get(demoController.Signin);
myRouter.route('/newgameTime').get(demoController.newgametime);
myRouter.route('/demoallteam').get(demoController.demolallteam);



myRouter.route('/indexSearch.html').get(demoController.indexSearch);
myRouter.route('/allTeam.html').get(demoController.allTeam);
myRouter.route('/officialDetails.html').get(demoController.officialDetails);
myRouter.route('/games.html').get(demoController.games);
myRouter.route('/order.html').get(demoController.order);
myRouter.route('/products.html').get(demoController.products);
myRouter.route('/pay.html').get(demoController.pay);
myRouter.route('/releasePost.html').get(demoController.releasePost);
myRouter.route('/round.html').get(demoController.round);
myRouter.route('/shop.html').get(demoController.shop);
myRouter.route('/shoppingCart.html').get(demoController.shoppingCart);
myRouter.route('/Utie.html').get(demoController.Utie);
myRouter.route('/wish.html').get(demoController.wish);
myRouter.route('/community.html').get(demoController.community);
myRouter.route('/personal.html').get(demoController.personal);
myRouter.route('/personalCenter.html').get(demoController.personalCenter);
myRouter.route('/Signin.html').get(demoController.Signin);
myRouter.route('/register.html').get(demoController.register);
myRouter.route('/findPass.html').get(demoController.findPass);
myRouter.route('/OrderDetails.html').get(demoController.OrderDetails);
myRouter.route('/payone.html').get(demoController.payone);
myRouter.route('/paytwo.html').get(demoController.paytwo);
myRouter.route('/orderone.html').get(demoController.orderone);



module.exports=myRouter;