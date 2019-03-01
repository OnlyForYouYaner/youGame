var express=require('express');
var personalController=require('./../controller/UtieController.js');
var myRouter=express.Router();
myRouter.route('/content').get(personalController.content);
myRouter.route('/PersonalInformation').get(personalController.PersonalInformation);
myRouter.route('/GroupNameOne').get(personalController.GroupNameOne);
myRouter.route('/LeavingAmessage').get(personalController.LeavingAmessage);
myRouter.route('/AddTo').get(personalController.AddTo);
myRouter.route('/GiveTheThumbsUp').get(personalController.GiveTheThumbsUp);
myRouter.route('/y_Collection').get(personalController.Collection);
myRouter.route('/y_CollectionYes').get(personalController.CollectionYes);
myRouter.route('/y_CollectionY').get(personalController.CollectionY);
myRouter.route('/y_CollectionN').get(personalController.CollectionN);
myRouter.route('/y_RepostThumbs').get(personalController.RepostThumbs);

module.exports=myRouter;