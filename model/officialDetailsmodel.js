var mysql=require('mysql');

var database=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yougame'
});
var officialDetailsModel={
    officialDetailsname:function (id,fn) {
        var sql='SELECT * FROM allteam WHERE a_id='+id+';';
        database.query(sql,function (err,data) {
            // console.log(data)
            fn(err,data);
        })
    },
    teamFocusedOn1:function (focus,Id,userID,fn) {
        if (focus==0){
            focus=1;
            var sql='UPDATE allteam SET Focus='+focus+' WHERE a_id='+Id+';';
            var sql2='INSERT INTO userattention VALUES (NULL,'+userID+','+Id+')';
            database.query(sql,function (err,data) {
                database.query(sql2,function (err1,data1) {
                    fn(err1,data1);
                });
            });
        } else{
            focus=0;
            var sql='UPDATE allteam SET Focus='+focus+' WHERE a_id='+Id+';';
            var sql2='DELETE FROM userattention WHERE a_id='+Id+' AND u_id='+userID+';';
            database.query(sql,function (err,data) {
                database.query(sql2,function (err2,data2) {
                    fn(err2,data2);
                });
            });
        }
    },
    membership1:function (memberID,fn) {
        // console.log(memberID)
        var sql='SELECT * FROM allteam,user,userattention WHERE allteam.a_id=userattention.a_id AND userattention.u_id=user.u_id AND allteam.a_id='+memberID+';';
        database.query(sql,function (err,data) {
            fn(err,data);
        })
    },
    postsNumber1:function (uId,fn) {
        var sql='SELECT *,COUNT(p_id) AS postnum FROM allteam,postinformation WHERE allteam.a_id=postinformation.a_id AND allteam.a_id='+uId+';';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    userName:function (userid,fn) {
        var sql='SELECT u_atuograph,USER.u_id,u_nickName,u_photo,COUNT(*) AS gamesnum FROM USER,gamesnumber WHERE user.u_id=gamesnumber.u_id AND user.u_id='+userid+';';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    yougameMember:function (fn) {
        var sql='SELECT * FROM allteam,USER,userattention WHERE allteam.a_id=userattention.a_id AND userattention.u_id=user.u_id AND allteam.a_id=2;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    fusheMember:function (fn) {
        var sql='SELECT * FROM allteam,USER,userattention WHERE allteam.a_id=userattention.a_id AND userattention.u_id=user.u_id AND allteam.a_id=3;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    jzyMember:function (fn) {
        var sql='SELECT * FROM allteam,USER,userattention WHERE allteam.a_id=userattention.a_id AND userattention.u_id=user.u_id AND allteam.a_id=4;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    yougamePostnum:function (fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id=2;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    fushePostnum:function (fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id=3;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    jzyPostnum:function (fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id=4;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    yougameDate:function (fn) {
        var sql='SELECT MAX(postinformation.p_date) AS p_date FROM allteam,postinformation WHERE allteam.a_id=postinformation.a_id  AND allteam.a_id=2;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    fusheDate:function (fn) {
        var sql='SELECT MAX(postinformation.p_date) AS p_date FROM allteam,postinformation WHERE allteam.a_id=postinformation.a_id  AND allteam.a_id=3;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    jzyDate:function (fn) {
        var sql='SELECT MAX(postinformation.p_date) AS p_date FROM allteam,postinformation WHERE allteam.a_id=postinformation.a_id  AND allteam.a_id=4;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    teamPostContent:function (a_id,fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id='+a_id+';';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    newest:function (p_id,fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id='+p_id+' ORDER BY postinformation.p_date DESC;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    recommended:function (p_id,fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id='+p_id+' AND postinformation.p_fabulous>=10;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    choiceness:function (p_id,fn) {
        var sql='SELECT * FROM postinformation,USER,allteam WHERE user.u_id=postinformation.u_id AND allteam.a_id=postinformation.a_id AND postinformation.a_id='+p_id+' AND postinformation.p_fabulous>=10;';
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    },
    postmessageNum:function (Num_id,fn) {
        var sql='SELECT postmessage.p_id,COUNT(postmessage.p_id) AS huifunum FROM postinformation JOIN postmessage ON postinformation.p_id=postmessage.p_id WHERE ';
        Num_id.forEach(function (v,i) {
            sql=sql+'postmessage.p_id='+v+' OR ';
            if (i+1 == Num_id.length) {
                sql=sql.substring(0,sql.length-3);

                sql = sql + ' GROUP BY postmessage.p_id ;';
            }
        });
        console.log(sql)
        database.query(sql,function (err,data) {
            // console.log(data);
            fn(err,data);
        })
    }

};
module.exports=officialDetailsModel;