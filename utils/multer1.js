var multer1=require('multer');

var storage = multer1.diskStorage({
    destination: function (req, file, cb) { //指定硬盘的路径，文件保存的地方
        cb(null, './public/images/roundImage/')
    },
    filename: function (req, file, cb) {//指定文件名和拓展名
        var arr=file.originalname;
        cb(null, arr);
}
});

var upload = multer1({ storage: storage });

module.exports=upload;