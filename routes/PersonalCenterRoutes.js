/**
 * Created by 华辉 on 2018/12/10 0010.
 */
//引入express框架
var express=require('express');
var PersonalController=require('./../controller/PersonalController66.js');
//定义模块
var PersonalCenterRoutes=express.Router();
//拦截全部小组搜索
PersonalCenterRoutes.route('/EssentialInformation').get(PersonalController.Informationfind);
PersonalCenterRoutes.route('/beath').get(PersonalController.beathfind);
PersonalCenterRoutes.route('/address').get(PersonalController.addressfind);
PersonalCenterRoutes.route('/address1').get(PersonalController.addressfind1);
PersonalCenterRoutes.route('/countadres').get(PersonalController.countadres);
PersonalCenterRoutes.route('/modifybtn').get(PersonalController.modifybtn);
PersonalCenterRoutes.route('/delbtn').get(PersonalController.delbtn);
PersonalCenterRoutes.route('/addaddress').get(PersonalController.addaddress);
PersonalCenterRoutes.route('/addressnum').get(PersonalController.addressnum);
PersonalCenterRoutes.route('/deladdress').get(PersonalController.deladdress);

//导出模块
module.exports=PersonalCenterRoutes;