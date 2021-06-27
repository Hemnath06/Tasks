import React,{useReducer} from "react"
import Counter2 from "./Counter2"

const a={
    first:0,
    second:"",
    color:""
}

const reduce = (state,action)=>{
      switch(action.target){
          case "increment":
              return {...state,first: state.first+action.value}
          case "decrement":
                return {...state,first: state.first-action.value}
          case "reset":
                return {...state,first: 0}
          case "red":
              return{...state,second:"red"}
          default:
              return state.first
      }
}

export const A = React.createContext()

function Counter1() {

    
   const [count,setCount] = useReducer(reduce,a) 

  

    return (
        <div>
            
          
            <A.Provider value={{a:count, b:setCount}}>
                  <Counter2 />
            </A.Provider>   
            

        </div>
    )
}

export default Counter1
