import axios from "axios";
import { takeEvery,call,put } from "redux-saga/effects";
import { get, inc } from "../redux/action";


export function* create(){
    console.log("create is running")
    yield takeEvery(get,update);
}

export function* create1(){
    console.log("create1 is running1")
    yield takeEvery("get1",update1);
}

export function* update(){
    console.log("update is running");
    const api="https://jsonplaceholder.typicode.com/users"
    const result = yield call(axios.get,api);
    
    console.log(result.data)
    yield put({type:inc, value:result.data})
    
}


export function* update1(){
    console.log("update 1 is running");
    const api1 = "https://jsonplaceholder.typicode.com/posts/7"
    const result1 = yield call(axios.get,api1);
    console.log(result1.data);
    yield put({type:"show", value:result1.data})
}
