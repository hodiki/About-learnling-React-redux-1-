import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import createStore from './createStore'

import Title from './Title'

import reducer from './reducer'
//store是局部变量,其它组件怎么办? =>props
var store = createStore(reducer)

class App extends Component{
    // state={
    //     title : "这是标题",
    //     content : "这是内容"
    // }
    //需要使用setState去更新组件。通过订阅器constructor去实现
    constructor(){
        super()

        store.subscribe(()=>{
            this.setState(store.getState())
        })
    }
    changeTitle=(newTitle)=>{
        // this.setState({
        //     title : newTitle
        // })
        store.dispatch({type : 'CHANGE_TITLE',newTitle:newTitle})
    }
    render(){
        const{title,content}=store.getState()
        return(
            <div>
                <Title store={store}></Title>
                <p>{content}</p>
                <button onClick={()=>this.changeTitle('新的标题')}>修改标题</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
