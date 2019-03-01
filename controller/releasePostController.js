var releasePostModel=require('../model/releasePostmodel.js');
var releasePostController= {
    sendPost: function (req, res) {
        releasePostModel.sendPost(req.query.titletText, req.query.editor_value,req.query.teamId,req.query.userID,req.query.p_Date,function (err, data) {
           console.log(req.query.titletText, req.query.editor_value,req.query.teamId,req.query.userID,req.query.p_Date);
            if (err) {
                console.log('数据库错误'+err)
            } else {
                res.send({error: 0, content: data});

            }
        })
    },
};
module.exports=releasePostController;