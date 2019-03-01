//引入express框架
var express=require('express');
//下面配置图标模块
var favicon=require('serve-favicon');
//引用日志模块
var morgan=require('morgan');
var cors = require('cors');
//post模块
var bodyParser=require('body-parser');
//   index路由
var demoRoute=require('./routes/demoRoute.js');
//allTeam路由
var allTeamRoute=require('./routes/allTeamRoute.js');
//社区大厅路由
var communityRoute=require('./routes/communityRoute.js');
//个人中心路由
var PersonalCenterRoute=require('./routes/PersonalCenterRoutes.js');
//发布U帖路由
var releasePostRoute=require('./routes/releasePostRoute.js');
//官方详情路由
var officialDetailsRoute=require('./routes/officialDetailsRoute.js');
//登录页面路由
var SigninRoute=require('./routes/SigninRoute.js');
//忘记密码路由
// var findPassRoute=require('./routes/findPassRoute.js');
//注册路由
// var registerRoute=require('./routes/registerRoute.js');
//个人主页路由
var personalRoute=require('./routes/personalRoute.js');
//周边路由
var roundRoute=require('./routes/roundRoute.js');
//购物车路由
var shoppingCartRoute=require('./routes/shoppingCartRoute.js');
//周边商品详情路由
var shopRoute=require('./routes/shopRoute.js');
//心愿单路由
var wishRoute=require('./routes/wishRoute.js');
//确认订单路由
var orderRoute=require('./routes/orderRoute.js');
var ordersRoute=require('./routes/ordersRoute.js');
//游戏路由
var gameRoutes=require('./routes/gameRoutes.js');
//游戏详情路由
var productRoutes=require('./routes/productRoutes.js');
//U帖详情路由
var UtieRoutes=require('./routes/UtieRoutes.js');
//后台路由
var BackRoutes=require('./routes/backRouter.js');
//周边订单
var roundOrderRoutes=require('./routes/roundOrderRoutes.js');
//游戏订单
var gameOrderRoutes=require('./routes/gameOrderRoutes.js');
var Forum=require('./routes/RoutesForum.js');
//客服路由
var ServerReply=require('./routes/ServerRouter.js');

var shopX=require('./routes/RoutesshopX.js');
var indexsearchRoute=require('./routes/indexsearchRoute.js');

//ejs模块
var ejs=require('ejs');

//session模块
var session=require('express-session');
//cookie模块
var cookie=require('cookie-parser');
//multer模块
var multer=require('multer');
//短信验证模块
var AV = require('leanengine');
//邮箱模块
var nodemailer=require('nodemailer');

//--gulp模块已录入，gulp-less模块已录入  --//


//搭建服务
var app=express();

// app.all('*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','X-Requested-With');
//     res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
//     res.header('X-Powered-By','3.2.1');
//     res.header('Content-Type','application/json;charset=utf-8');
//
//     next();
// });




//使用图标模块
app.use(favicon(__dirname+'/public/images/ico16x16.ico'));
//使用日志模块
app.use(morgan('dev'));
//使用post请求模块
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));//把请求头设置为 application/x-www-form-urlencoded
//配置视图的路径
app.set('views',__dirname+'/view');
app.engine('html',ejs.__express);
app.set('view engine','html');
//配置cookie
app.use(cookie());
//配置session

app.use(session({
    secret:'aaa',//字符串  session的签名   认证
    name:'ugame',      //返回给客户端cookie的key值
    cookie:{maxAge:5000000000000000000000000000000}, //设置失效时间,单位:毫秒
    rolling:true,    //更新保存时间
    resave:true      //重新保存
}));
//-----------------手机短信验证-----------------
//AV.init({
//     appId: 'xxx-xxx',
//     appKey: 'xxxx',
//     masterKey: 'xxx'
// });
//app.use(AV.express());
//app.get('/getCode',function (req,res) {
//     console.log(req.query.phone);
//     AV.Cloud.requestSmsCode({
//         mobilePhoneNumber:req.query.phone,
//         name: '愚蠢的胖吉吉啊',
//         op: '你是不会有兔女郎学姐的',
//         ttl: 10                     // 验证码有效时间为 10 分钟
//     }).then(function(res){
//         //调用成功
//         console.log(res);
//         res.send({error:0})
//     }, function(err){
//         //调用失败
//         console.log(err);
//         res.send({error:1})
//     });
// });
//---------------------------------------------

//--------------邮箱-------------------------
//app.post('/sendEmail',function (req,res) {
//       var email=nodemailer.createTransport({
//               host:'smtp.qq.com',
//               port:'587',
//               secure:false,  // true for 465
//               auth:{
//                   user:'565792027@qq.com',
//                   pass:'nplfclixaafwbccc'
//               }
//       });
//     var msg = {
//         from: '污水厂<565792027@qq.com>', // sender address
//         to: req.body.user, // list of receivers
//         subject: req.body.sub, // Subject line
//         text:req.body.msg// plain text body
//     };
//     email.sendMail(msg,function(err,data)  {
//         console.log(err,data);
//         res.send({error:0});
//         email.close();
//     })
// });
//--------------------------------------------------

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
}));
var multer=require('./utils/multer.js');
var multer1=require('./utils/multer1.js');

app.post('/upload8',multer.array('file',5),function (req,res) {
    // console.log(req.file);
    console.log('成功');
    res.send({error:0});
});
app.post('/upload9',multer1.array('file',5),function (req,res) {
    // console.log(req.file);
    console.log('成功');
    res.send({error:0});
});

//下面是静态访问地址
app.use(express.static(__dirname+'/public'));
//使用路由
app.use(demoRoute);
//使用allTeam路由
app.use(allTeamRoute);
//使用社区路由
app.use(communityRoute);
//使用个人中心路由
app.use(PersonalCenterRoute);
//使用发布U帖路由
app.use(releasePostRoute);
//使用官方小组详情路由
app.use(officialDetailsRoute);
//使用登录页面路由
app.use(SigninRoute);
//使用忘记密码路由
// app.use(findPassRoute);
//使用注册路由
// app.use(registerRoute);
//使用个人主页路由
app.use(personalRoute);
//使用周边路由
app.use(roundRoute);
//使用购物车路由
app.use(shoppingCartRoute);
//使用周边相详情路由
app.use(shopRoute);
//使用心愿单路由
app.use(wishRoute);
//确认订单路由
app.use(orderRoute);
app.use(ordersRoute);
//使用游戏路由
app.use(gameRoutes);
//游戏详情
app.use(productRoutes);
app.use(UtieRoutes);
app.use(officialDetailsRoute);
app.use(BackRoutes);
app.use(roundOrderRoutes);
app.use(gameOrderRoutes);
app.use(Forum);
app.use(ServerReply);
app.use(shopX);
app.use(indexsearchRoute);

app.get('*',function(req, res, next) {

    res.render('../view/404.html')
});







//下面是路由


//app.get('接口',function (request,response) {
//             //接收数据
//                 request.query
//             //返回数据
//                 response.send()
//         });
// app.post('/register',function (req,res) {
//             接收数据
//                 request.body
//             发送数据
//                 response.send()
//         });
//关于页面的重定向
//app.get('/',function (req,res) {
//    res.redirect('/login.html')
//});

//下面是端口
app.listen(8081,function () {
    console.log('项目启动！！')
});

//引入
var ws=require('ws').Server;
//创建服务
var server=new ws({host:'192.168.1.186',port:9999});
//配置服务功能
var arr=new Array(); //存放客户端链接
//当有客户端和我建立连接的时候
server.on('connection',function (ws) {//ws是当前链接的对象
    console.log('');
    arr.push(ws);
    //当这个人发送消息的时候
    ws.on('message',function (data) {//发送的消息
        for(var i=0;i<arr.length;i++){
            arr[i].send(data)
        }
    });
    //当这个人断开链接
    ws.on('close',function () {
        for(var i=0;i<arr.length;i++){
            if(arr[i]==ws){
                arr.splice(i,1);
                break;
            }
        }
    })
});
