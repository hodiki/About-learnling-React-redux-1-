import React, { Component } from 'react';

class Login extends Component{
    render(){
        //const {color,switchColor}= this.props
        return(
            <div className="login_box">
                <div className="login_top">登陆</div>
                    <form action="form_action.asp" method="get">
                        <div className="login_l">账号：</div><input type="text" name="fname" />
                        <br/>
                        <div className="login_l">密码：</div><input type="password" name="lname" />
                        <br/>
                        <div ><input className="login_submit" type="submit" value="登陆" /></div>
                    </form>
            </div>
        )
    }
}

export default Login  //将该组件导出