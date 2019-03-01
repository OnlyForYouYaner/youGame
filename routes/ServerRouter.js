//引入express框架
var express=require('express');
var ServerController=require('./../controller/ServerController.js');
//定义模块
var ServerRoutes=express.Router();
//拦截全部客服搜索
ServerRoutes.route('/Serverfind').get(ServerController.Serverfind);
ServerRoutes.route('/Serverfind2').get(ServerController.Serverfind2);
ServerRoutes.route('/Serverfind3').get(ServerController.Serverfind3);
ServerRoutes.route('/Serverfind4').get(ServerController.Serverfind4);
ServerRoutes.route('/Serverfind5').get(ServerController.Serverfind5);
ServerRoutes.route('/Serverfind6').get(ServerController.Serverfind6);
ServerRoutes.route('/Serverfind7').get(ServerController.Serverfind7);

//导出模块
module.exports=ServerRoutes;