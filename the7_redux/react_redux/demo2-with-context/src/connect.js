import React, {Component} from 'react'
import PropTypes from 'prop-types'

//代收包裹,包装工厂（执行static等）
//此处使用闭包，传入俩函数用于选择state和dispatch
var connect = function(mapStateToProps,mapDispatchToProps){
    return function(WrappedComponent){
        return (
            //高阶组件，对其它组件进行包装
            class Connect extends Component{
                //提取context
                static contextTypes={
                    store : PropTypes.object
                }
                constructor(){
                    super()
                    this.state = {
                        allProps :{}
                    }
                }
                componentWillMount(){
                    const {store} =this.context
                    this.updateProps()
                    //订阅更新组件
                    store.subscribe(()=>this.updateProps)
                }
                updateProps(){
                    var {store} = this.context
                    //筛选
                    //选择哪些state要通过props传递下去
                    //下面那俩都是对象
                    var needState = mapStateToProps ?
                        mapStateToProps(store.getState(),this.props) : {}      
                    var needDispatch = mapDispatchToProps ?
                        mapDispatchToProps(store.dispatch,this.props) : {}
                    
                    this.setState({
                        allProps : {
                            ...needState,
                            ...needDispatch,
                            ...this.props
                        }
                    })
                }
                render(){
                    return(
                        <WrappedComponent {...this.state.allProps}></WrappedComponent>
                    )
                }
            }
        )
    }
}


class Provider extends Component{
    static propTypes={
        store : PropTypes.object,
        children : PropTypes.any
    } 
    static childContextTypes={
        store : PropTypes.object
    }
    getChildContext(){
        return {
            store : this.props.store
        }
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export {Provider,connect}