var mysql = require('mysql');
var step = require('Step');
var async = require('async');

//连接库
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'zhy438165064',
    database : 'yasong'
    });

var mysql_back='100';
var mysql_toback=function(err,result){
    if(err){
        console.log(err);
    }else{
        //console.log(result);
        mysql_back=result;
    }
}
var mysql_control = function(sql,callback){
    var sql = sql;

    //直接注入sql语句
    //var sql = 'SELECT * FROM abc';

    connection.connect();   //连接数据库

    connection.query(sql,callback);    
    // connection.query(sql,callback,function (err) {
    //     if(err){
    //     console.log('[ERROR] - ',err.message);
    //     return;
    //     }
    // });    
    connection.end();  //释放连接

}

//使用举例

// mysql_control('show tables',mysql_toback,(err,result)=>{

//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//         mysql_back=result;
//     }
// })
//mysql_control('show tables',mysql_toback);
// console.log(mysql_back);

var tb=function(){
    if(mysql_back!='100'){
        console.log(mysql_back);
        return;
    }else{
        mysql_control('show tables',mysql_toback);
        setTimeout(function(){
            tb();
        },10);
        
    }
}

tb();

/////////////////////////////////////////////////////////////////


// var abc=123;
// var tb=function(count,num){
//     if(count==num){
//         console.log(abc);
//         return;
//     }else{
//         abc=13;
//         count++;
//         tb();
//     }
// }

// tb(0,2);






// mysql_control('show tables',mysql_toback);
// var func1 = function(){
//     setTimeout(function(){
//         console.log(mysql_back);
//     },1000);
//   }

// func1();
