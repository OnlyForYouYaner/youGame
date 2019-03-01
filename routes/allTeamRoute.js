//引入express框架
var express=require('express');
var allTeamController=require('./../controller/allTeamController.js');
//定义模块
var allTeamRouter=express.Router();
//拦截全部小组搜索
allTeamRouter.route('/allTeamsearch').get(allTeamController.allTeamsearch);
// 拦截我的小组
allTeamRouter.route('/myTeam').get(allTeamController.myTeam);
// 拦截新游上线
allTeamRouter.route('/newGameOnline').get(allTeamController.newGameOnline);
// 拦截官方小组
allTeamRouter.route('/officialTeam').get(allTeamController.officialTeam);
// 拦截新游上线
allTeamRouter.route('/newGameOnline').get(allTeamController.newGameOnline);
// 拦截动作冒险
allTeamRouter.route('/actionAdventure').get(allTeamController.actionAdventure);
// 拦截角色扮演
allTeamRouter.route('/rolePlay').get(allTeamController.rolePlay);
// 拦截射击竞技
allTeamRouter.route('/shootingSports').get(allTeamController.shootingSports);
// 拦截策略模拟
allTeamRouter.route('/strategySimulation').get(allTeamController.strategySimulation);
// 拦截体育竞速
allTeamRouter.route('/sportRacing').get(allTeamController.sportRacing);
// 拦截其他
allTeamRouter.route('/other').get(allTeamController.other);
// 拦截小组关注
allTeamRouter.route('/teamFocusedOn').get(allTeamController.teamFocusedOn);
// 拦截成员数
allTeamRouter.route('/membership').get(allTeamController.membership);
// 拦截U帖数
allTeamRouter.route('/postsNumber').get(allTeamController.postsNumber);



//导出模块
module.exports=allTeamRouter;