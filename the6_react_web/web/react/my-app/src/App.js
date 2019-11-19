import React, { Component } from 'react';
//import logo from './logo.svg'; // 图片打包引入处理
import './App.css';

import Login from './123.js';    //引入其它组件

//import Button from './Button';


//类=>组件
// class Title extends Component{
//     constructor(props){
//         super()
//         const {title} = props
//         this.state = {
//             title:title
//         }
//     }
//     render(){
//         const {title} = this.props
//         console.log(this.state)
//         return(
//             <h2>{title}</h2>
//         )
//     }
// }

//纯粹的组件
// var Button2 = (props) => (
//     <div>
//         <button>{props.name}</button>
//     </div>
// )

////////////////////////////////////////////////////////////++ //内为测试与参考内容

// const Title = ({color}) =>(
//     <h2 style={{color:color}}>标题</h2>
// )

// class Button3 extends Component{
//     render(){
//         const {color,switchColor}= this.props
//         return(
//             <div>
//                 <button
//                     style={{color:color}}
//                     onClick={()=>{
//                         switchColor('blue')
//                     }}
//                 >变蓝
//                 </button>
//                 <button
//                     style={{color:color}}
//                     onClick={()=>{
//                         switchColor('red')
//                     }}
//                 >变红</button>
//                  <button
//                     style={{color:color}}
//                     onClick={()=>{
//                         switchColor('orange')
//                     }}
//                 >变橙</button>
//             </div>
//         )
//     }
// }

////////////////////////////////////////////////////////////++

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             color:'black' //状态提升
//         }
//     }
//     changeColor(newColor){
//         this.setState({
//             color:newColor
//         })
//     }
//     render(){
//         const{color}=this.state
//         return(
//             <div>
//                 <Title color={color}></Title>
//                 <Button3 color={color} switchColor={(newColor)=>{this.changeColor(newColor)}}></Button3>
//             </div>
//         )
//     }

//     ////////////////////////////////////////////////////////////++
//     // constructor(){
//     //     super()

//     //     this.state={
//     //         like:false            //state pool
//     //     }
//     // }
//     // handleClick(){
//     //     const {like}=this.state           //set state
//     //     this.setState({
//     //         like:!like
//     //     })
//     // }
//     // render(){
//     //     const {like}=this.state                   //this,state
//     //     const fontcolor=like?'red':'black'      
//     //     const str=like?'已赞':'点赞'
//     //     return(
//     //         <div>
//     //             <Button/>
//     //             <Button3/>
//     //             <button
//     //                 style={
//     //                     {color:fontcolor}
//     //                 }
//     //                 onClick={()=>{
//     //                     this.handleClick()
//     //                     }
//     //                 }
//     //             >

//     //             {str}
//     //             </button>
//     //         </div>
//     //     )
//     // }
    
//     ////////////////////////////////////////////////////////////++
// }

// class Login extends Component{
//     render(){
//         //const {color,switchColor}= this.props
//         return(
//             <div className="login_box">
//                 <div className="login_top">登陆</div>
//                     <form action="form_action.asp" method="get">
//                         <div className="login_l">账号：</div><input type="text" name="fname" />
//                         <br/>
//                         <div className="login_l">密码：</div><input type="password" name="lname" />
//                         <br/>
//                         <input type="submit" value="登陆" />
//                     </form>
//             </div>
//         )
//     }
// }

class App extends Component{
  constructor(){
      super()
      this.state = {
          color:'pink' //状态提升
      }
  }
  changeColor(newColor){
      this.setState({
          color:newColor
      })
  }
  render(){
      //const{color}=this.state
      return(
          <Login/>
      )
  }
}
export default App;