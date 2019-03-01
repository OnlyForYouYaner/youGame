var express=require('express');

var registerController=require('./../controller/registerController.js');
var myRouter=express.Router();

myRouter.route('/register').get(registerController.register);
myRouter.route('/registerph').get(registerController.registerph);

module.exports=myRouter;