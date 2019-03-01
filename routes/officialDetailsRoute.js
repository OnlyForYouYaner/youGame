var express=require('express');
var officialDetailscontroller=require('../controller/officialDetailsController.js');
//定义模块
var officialDetailsRouter=express.Router();

officialDetailsRouter.route('/officialDetailsname').get(officialDetailscontroller.officialDetailsname);
// 拦截小组关注
officialDetailsRouter.route('/teamFocusedOn1').get(officialDetailscontroller.teamFocusedOn1);
// 拦截成员数
officialDetailsRouter.route('/membership1').get(officialDetailscontroller.membership1);
// 拦截U帖数
officialDetailsRouter.route('/postsNumber1').get(officialDetailscontroller.postsNumber1);
officialDetailsRouter.route('/userName').get(officialDetailscontroller.userName);
officialDetailsRouter.route('/yougameMember').get(officialDetailscontroller.yougameMember);
officialDetailsRouter.route('/fusheMember').get(officialDetailscontroller.fusheMember);
officialDetailsRouter.route('/jzyMember').get(officialDetailscontroller.jzyMember);
officialDetailsRouter.route('/yougamePostnum').get(officialDetailscontroller.yougamePostnum);
officialDetailsRouter.route('/fushePostnum').get(officialDetailscontroller.fushePostnum);
officialDetailsRouter.route('/jzyPostnum').get(officialDetailscontroller.jzyPostnum);
officialDetailsRouter.route('/yougameDate').get(officialDetailscontroller.yougameDate);
officialDetailsRouter.route('/fusheDate').get(officialDetailscontroller.fusheDate);
officialDetailsRouter.route('/jzyDate').get(officialDetailscontroller.jzyDate);
officialDetailsRouter.route('/teamPostContent').get(officialDetailscontroller.teamPostContent);
officialDetailsRouter.route('/newest').get(officialDetailscontroller.newest);
officialDetailsRouter.route('/recommended').get(officialDetailscontroller.recommended);
officialDetailsRouter.route('/choiceness').get(officialDetailscontroller.choiceness);
officialDetailsRouter.route('/postmessageNum').get(officialDetailscontroller.postmessageNum);




//导出模块
module.exports=officialDetailsRouter;