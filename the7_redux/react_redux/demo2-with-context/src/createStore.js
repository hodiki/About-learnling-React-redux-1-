import { create } from "domain";

//整一个函数去生成主体store,因为store在不同的应用中会有较大的改变
//希望调用createStore就返回一个store
//此时的creatStore很纯净,传入你希望的diaptch规则
var createStore = function (reducer) {

    var state = null
    var listeners = []

    var dispatch = function (action) {
        //appReducer(即reducer)返回一个新的state去改变原有的state
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    dispatch({})

    var getState = function () {
        return state
    }

    var subscribe = function (listener) {
        listeners.push(listener)
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}

export default createStore
// var redux={}
// redux.createStore=createStore