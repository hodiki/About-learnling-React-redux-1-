import React, { Component } from 'react';
import logo from './logo.svg'; // 图片打包引入处理
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      title:"1231231234"
    }
  }
  render(){
    const {title}=this.state
    var like = true
    var arr=[1,2,3]
    var a={}
    return(
      <div className="App">
        hello react!
        
        <div>{title}</div>
        {arr}
        {like}
      </div>
    )
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;
