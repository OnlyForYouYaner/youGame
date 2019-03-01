var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var releasePostModel= {
    sendPost: function (titleText,editor_value,teamId,userID,p_Date,fn) {
        console.log(teamId)
        var sql = 'INSERT INTO postinformation(u_id,p_text,p_message,p_date,a_id) VALUE('+userID+',"'+titleText+'","'+editor_value+'","'+p_Date+'",'+teamId+');';
        database.query(sql, function (err, data) {

            fn(err, data);
        })
    },
};
module.exports=releasePostModel;
