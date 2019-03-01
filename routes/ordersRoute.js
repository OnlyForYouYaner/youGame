//引入express框架
var express=require('express');
var ordersController=require('./../controller/ordersController.js');
//定义模块
var ordersRoute=express.Router();
//拦截全部小组搜索
ordersRoute.route('/myorder').get(ordersController.orderfind);
ordersRoute.route('/myorder2').get(ordersController.orderfind2);
ordersRoute.route('/myrough').get(ordersController.orderough);
ordersRoute.route('/myrough2').get(ordersController.orderough2);
ordersRoute.route('/myover').get(ordersController.orderover);
ordersRoute.route('/myover2').get(ordersController.orderover2);
ordersRoute.route('/orderzhifu').get(ordersController.orderzhifu);

//导出模块
module.exports=ordersRoute;