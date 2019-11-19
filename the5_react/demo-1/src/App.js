import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//路由课

import { //引入路由等
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  Prompt,
  Redirect
} from 'react-router-dom'

const Home=()=>(
  <div>Home</div>
)

const Blog=()=>(
  <div>
    <Prompt when={true} message={"啥呀"}></Prompt>  {/*弹窗*/}
    Blog
    </div>
)

const Detail =(props)=>{               //replace，读取history中的replasce替换网页
  console.log(props.history)
  return<div>
    <button onClick={
      ()=>{
        props.history.replace('/detail/不存在的')
      }
    }
    >
    replace
    </button>
    {props.match.params.name}
  </div>
}

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <Router>
        <div>
          <Link to="/blog">去快乐老家</Link>
          <Route path="/home" component={Detail}></Route>
          {/* <Route path="/blog" component={Blog}></Route> */}
          
        <Switch>                
            <Route                   
            exact={true}          
            path="/"
            render={
              ()=>(
                <h1>首页？</h1> //首页设定
              )
            }
            >
            </Route>
            <Route path="/home"
            render={
              ()=>(
                <div>Home</div>
              )
            }
            ></Route>
            <Redirect from="/bukao" to="/blog" ></Redirect>     {/*跳转路径*/}
            <Route path="/blog" component={Blog}></Route>   
            <Route render={()=><div>404</div>}></Route>   {/*所谓404  因为没有匹配路径*/}
            {/* exact 严格路径匹配 */}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
