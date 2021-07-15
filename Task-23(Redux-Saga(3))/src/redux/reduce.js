import { combineReducers } from "redux"

const data={
    value:"hemnath"
}

export const reduce=(state={data:null,data1:null},action)=>{
    switch(action.type){
       case "inc":
           return {...state,data: action.value}
       case "show":
            return {...state,data1: action.value}
        default:
            return state
    }
}



export const root = combineReducers({
    reduce: reduce
})