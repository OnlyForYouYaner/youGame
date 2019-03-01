var express=require('express');
var searchController=require('./../controller/searchController.js');
var searchRouter=express.Router();

searchRouter.route('/searchUtie').get(searchController.searchUtie);
searchRouter.route('/searchAllteam').get(searchController.searchallteam);
searchRouter.route('/searchUser').get(searchController.searchuser);

searchRouter.route('/searchGamemes').get(searchController.searchgames);
searchRouter.route('/searchallGamemes').get(searchController.searchallgames);

searchRouter.route('/searchusername').get(searchController.searchusername);

searchRouter.route('/searchAllteamName').get(searchController.searchallteamname);
searchRouter.route('/searchAllteamPeo').get(searchController.searchallteampeo);
searchRouter.route('/searchAllteamutie').get(searchController.searchallteamutie);

searchRouter.route('/searchusergame').get(searchController.searchusergame);

searchRouter.route('/searchAllgamesright').get(searchController.searchallgamesright);

searchRouter.route('/searchG').get(searchController.searchG);
searchRouter.route('/searchR').get(searchController.searchR);

module.exports=searchRouter;