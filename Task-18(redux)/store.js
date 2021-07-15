import {createStore,combineReducers} from "redux";

export const Inc = "inc";
export const Dec = "dec";
export const Reset = "reset";

export const push="push";
export const pop="pop";


const data={
    count:0
}

const reduce=(state=data,action)=>{
    switch(action.type){
        case "inc":
            return {...state,count:state.count+1}
        case "dec":
            return {...state,count:state.count-1}
        case "reset":
            return {...state,count:0}
        default:
         return state
    }
}

const range=(state=[],action)=>{
    switch(action.type){
        case "push":
            const a = [...state]
            a.push(action.value);
            return [...a]
       case "pop":
           const b = [...state]
           b.pop();
           return [...b]
       case "reset":
           return []
        default:
            return state
    }
}


const root = combineReducers({
    a: reduce,
    b: range
  });

const store = createStore(root);

export default store;
