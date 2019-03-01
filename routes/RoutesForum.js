var express=require('express');
var personalController=require('./../controller/ControllerForum');
var myRouter=express.Router();
myRouter.route('/y_forum').get(personalController.forum);
myRouter.route('/y_forumunm').get(personalController.forumunm);
myRouter.route('/y_comment').get(personalController.comment);
myRouter.route('/y_delete').get(personalController.delete);
myRouter.route('/y_Leaving').get(personalController.Leaving);
myRouter.route('/y_deleteLeaving').get(personalController.deleteLeaving);

module.exports=myRouter;