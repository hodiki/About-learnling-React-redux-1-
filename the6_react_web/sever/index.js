const express = require('express')
const app = express()
const bodyParser = require('body-parser')  //express常用中间件
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended : false})
const cookieParser = require('cookie-parser')
app.use(express.static('./static'))
app.use(cookieParser())
const path = require('path')
const fs = require('fs')
app.listen(80)  //监听端口

//自写moudle
const Mc = require('./db/mysql_control')    //mysql,使用时直接写sql,设置连接需进文件

// 1 0 
app.use(function(req,res,next){
    res.handle500 = function(){
        res.status(500).send({code : 0 , msg : "服务器错误"})
    }
    next()
})


// 登陆
var server_token = '' // 保存唯一标识
var expire_time = 0   // 设置过期时间
app.post('/login',urlencodedParser,(req,res)=>{
    var {username,password} = req.body //提取账号密码
    // 查表
    users.find({username,password},(err,result)=>{
        if(err) return res.handle500()
        if(result.length === 0){
            // 不存在
            res.status(403).send("账号密码不争气")
        } else {
            // 保存生成的唯一token
            server_token = Math.random().toString()

            // 设置过期时间
            expire_time = new Date().getTime() + 10 * 1000
            
            // 把token发送到cookie
            res.cookie('token' , server_token)
            res.send('登录成功')
        }
    })
})

// 登陆检测拦截
app.use((req,res,next)=>{
    var {token} = req.cookies //在cokies中取出token
    console.log(server_token , token)
    var nowTime = new Date().getTime()  // 获取当前请求的时间

    // 判断请求是否过期
    if(nowTime <= expire_time){     
        // 可以访问
        // 检查token是否对应
        if(server_token === token){

            // 更新过期时间
            expire_time = new Date().getTime() + 10 * 1000
            next()
        } else {
            res.status(403).send("403错误#1001")     //token不正确
        }
    } else {
        // 不可以访问
        res.status(403).send("403错误#1002")    //拒绝访问 - token过期
    }
    
})
