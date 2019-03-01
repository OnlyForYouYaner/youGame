var express=require('express');
var roundXController=require('./../controller/ControllershopX');
var roundRouter=express.Router();
roundRouter.route('/roundX').get(roundXController.roundX);
roundRouter.route('/searchnumX').get(roundXController.searchnumX);
roundRouter.route('/searchthisX').get(roundXController.searchthisX);

roundRouter.route('/changeEditX').get(roundXController.changeEditX);
roundRouter.route('/addX').get(roundXController.addX);
roundRouter.route('/upperX').get(roundXController.upperX);
roundRouter.route('/lowerX').get(roundXController.lowerX);
roundRouter.route('/addinformtion').get(roundXController.addinformtion);
roundRouter.route('/addxid').get(roundXController.addxid);


roundRouter.route('/loginoneX').get(roundXController.loginoneX);

module.exports=roundRouter;