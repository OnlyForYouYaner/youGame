var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var allTeamModel={
    allTeamsearch:function (text,fn) {
        var sql='SELECT DISTINCT * FROM allteam WHERE a_name LIKE "%'+text+'%" GROUP BY a_name;';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    myTeam:function (user_id,fn) {
        let sql='SELECT * FROM allteam,USER,userattention WHERE allteam.a_id=userattention.a_id AND userattention.u_id=user.u_id AND userattention.u_id='+user_id+' AND allteam.Focus=1;';
        database.query(sql,function (err,data) {
            fn(err,data);
    })
    },
    officialTeam:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="官方小组";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    newGameOnline:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="新游上线";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    actionAdventure:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="动作冒险";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    rolePlay:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="角色扮演";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    shootingSports:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="射击竞技";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    strategySimulation:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="策略模拟";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    sportRacing:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="体育竞速";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    other:function (fn) {
        var sql='SELECT * FROM allteam WHERE a_type="其他";';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    teamFocusedOn:function (foc,index,userID,fn) {
        if (foc==0){
            foc=1;
            var sql='UPDATE allteam SET Focus='+foc+' WHERE a_id='+index+';';
            var sql2='INSERT INTO userattention VALUES (NULL,'+userID+','+index+')';
            database.query(sql,function (err,data) {
                //fn(err,data);
                database.query(sql2,function (err1,data1) {
                    fn(err1,data1);
                });
                // console.log(sql,sql2)
            });
        } else{
            foc=0;
            var sql='UPDATE allteam SET Focus='+foc+' WHERE a_id='+index+';';
            var sql2='DELETE FROM userattention WHERE a_id='+index+' AND u_id='+userID+';';
            database.query(sql,function (err,data) {
                //fn(err,data);
                database.query(sql2,function (err2,data2) {
                    fn(err2,data2);
                });
                // console.log(sql,sql2)
            });
        }

    },
    membership:function (Name,fn) {
        var sql='SELECT * FROM allteam,USER,userattention WHERE allteam.a_id=userattention.a_id AND userattention.u_id=user.u_id AND allteam.a_name="'+Name+'" AND allteam.Focus=1;';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    postsNumber:function (groupID,fn) {
        var sql='SELECT COUNT(p_id) AS postnum FROM allteam,postinformation WHERE allteam.a_id=postinformation.a_id AND allteam.a_id='+groupID+';';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    }

};

module.exports=allTeamModel;