var express=require('express');
var wishroundController=require('./../controller/wishroundController');

var wishroundRouter=express.Router();


wishroundRouter.route('/wishload').get(wishroundController.wishload);
wishroundRouter.route('/wishgameload').get(wishroundController.wishgameload);
wishroundRouter.route('/wishdel').get(wishroundController.wishdel);
wishroundRouter.route('/wishdelgame').get(wishroundController.wishdelgame);
wishroundRouter.route('/wishadd').get(wishroundController.wishadd);
wishroundRouter.route('/wishaddgame').get(wishroundController.wishaddgame);
wishroundRouter.route('/mywish').get(wishroundController.wishfind);
wishroundRouter.route('/mywish2').get(wishroundController.wishfind2);




module.exports=wishroundRouter;



