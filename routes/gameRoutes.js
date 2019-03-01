var express=require('express');
var gameController=require('../controller/gameController');
var myRouter=express.Router();






myRouter.route('/newGameCount').get(gameController.newGameCount);
myRouter.route('/newGameCounts').get(gameController.newGameCounts);
myRouter.route('/newGameContent').get(gameController.newGameContent);
myRouter.route('/newGameContents').get(gameController.newGameContents);
myRouter.route('/GameContents').get(gameController.GameContents);
myRouter.route('/gameType').get(gameController.gameType);
myRouter.route('/grade').get(gameController.grade);
myRouter.route('/ourWish').get(gameController.ourWish);
myRouter.route('/downPrice').get(gameController.downPrice);
myRouter.route('/upPrice').get(gameController.upPrice);
myRouter.route('/upper').get(gameController.upper);
myRouter.route('/Lower').get(gameController.Lower);
myRouter.route('/GType').get(gameController.GType);
myRouter.route('/GOs').get(gameController.GOs);
myRouter.route('/GLanguage').get(gameController.GLanguage);
myRouter.route('/editG').get(gameController.editG);
myRouter.route('/addG').get(gameController.addG);
myRouter.route('/addT').get(gameController.addT);
myRouter.route('/addO').get(gameController.addO);
myRouter.route('/addL').get(gameController.addL);
myRouter.route('/dedT').get(gameController.dedT);
myRouter.route('/dedO').get(gameController.dedO);
myRouter.route('/dedL').get(gameController.dedL);
myRouter.route('/myGames').get(gameController.gamesfind);
myRouter.route('/AScore').get(gameController.AScore);




module.exports=myRouter;