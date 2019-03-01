var express=require('express');
var gameOrderController=require('./../controller/gameOrderController');

var gameOrderRouter=express.Router();


// gameOrderRouter.route('/gameOrder').get(gameOrderController.gameOrder);
// gameOrderRouter.route('/gamesearch').get(gameOrderController.gamesearch);
gameOrderRouter.route('/changeGame').get(gameOrderController.changeGame);
gameOrderRouter.route('/getSumGamePage').get(gameOrderController.getSumGamePage);
gameOrderRouter.route('/getEveryGamePage').get(gameOrderController.getEveryGamePage);
gameOrderRouter.route('/getOneGamePage').get(gameOrderController.getOneGamePage);






module.exports=gameOrderRouter;