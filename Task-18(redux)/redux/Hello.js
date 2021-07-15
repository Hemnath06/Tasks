import React, {useState} from "react";
import store, {Inc,Dec,Reset,push} from "../store";


function Hello() {

    const [count, setcount] = useState(0)
    const [arr, setarr] = useState([])

    const inc=()=>{
         store.dispatch({type:Inc});
         setcount(store.getState().a.count);
         console.log(store.getState().a);
    }

    const dec=()=>{
        store.dispatch({type:Dec});
        setcount(store.getState().a.count);
        console.log(store.getState().a);
   }

   const reset=()=>{
    store.dispatch({type:Reset});
    setcount(store.getState().a.count);
    console.log(store.getState().a);
}

   const push=()=>{
    store.dispatch({type:"push", value:Math.random()});
    console.log(store.getState().b)
    setarr(store.getState().b+",");
    
   } 

   const pop=()=>{
    store.dispatch({type:"pop"});
    console.log(store.getState().b)
    setarr(store.getState().b+",");
    
   } 

   const reset1=()=>{
    store.dispatch({type:"reset"});
    console.log(store.getState().b)
    setarr(store.getState().b);
    
   } 
   
    
    return (
        <div style={{background:"red",padding:"10px 20px",height:"701px",color:"orange",fontFamily: "Goudy Stout"}}>
            <h1 style={{fontSize:"60px"}}>Redux</h1>
            <h1>Count {count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <h5>[{arr} ]</h5>
            <button onClick={push}>push</button>
            <button onClick={pop}>pop</button>
            <button onClick={reset1}>reset</button>
        </div>
    )
}

export default Hello
