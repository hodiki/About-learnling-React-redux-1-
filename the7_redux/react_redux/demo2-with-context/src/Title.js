import React, {Component} from 'react'
import {connect} from './connect'

// class Content extends Component{
//     render(){
//         const {store} = this.props
//         return(
//             <p>{store.getState().content}</p>
//         )
//     }
// }
// Content = connect(Content)

class Title extends Component{
    render(){
        //利用context来传递store
        const {title}=this.props
        // const {title}= store.getState()
        console.log(this.props)
        return(
            <h3>{title}点一下换一个title
                {/* <Content></Content> */}
            </h3>
        )
    }
}

// connect(mapStateToProps,mapDispatchToProps)(Title)

// state.ownProps => {}
var mapStateToProps = function(state,ownProps){
    return{
        title : state.title
    }
}
var mapDispatchToProps = function(dispatch,ownProps){
    return{
        changeTitle : function(){
            dispatch({type : 'CHANGE_TITLE' , newTitle : 'from mapDispatch To props'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Title)