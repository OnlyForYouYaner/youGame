var express=require('express');

var signController=require('./../controller/signController.js');

var myRouter=express.Router();

myRouter.route('/login').get(signController.signin);
myRouter.route('/phlogin').get(signController.phsignin);

myRouter.route('/loginid').get(signController.signinid);
myRouter.route('/loginidone').get(signController.signinidone);


myRouter.route('/searchpagenum').get(signController.searchpage);
myRouter.route('/searchpagethis').get(signController.searchpageth);

myRouter.route('/searchcusnum').get(signController.searchcuspage);
myRouter.route('/searchcusthis').get(signController.searchcusthis);

myRouter.route('/managelogin').get(signController.managelog);

myRouter.route('/exit').get(signController.exit);

module.exports=myRouter;