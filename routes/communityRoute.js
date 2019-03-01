var express=require('express');

var communityController=require('./../controller/communityController.js');

var communityRouter=express.Router();

communityRouter.route('/postfind').get(communityController.postfind);
communityRouter.route('/postfind2').get(communityController.postfind2);
communityRouter.route('/useright').get(communityController.useright);


module.exports=communityRouter;