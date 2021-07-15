import React, {useState} from "react";
import store, {Inc,Dec,Reset,push} from "../store";
import {connect} from "react-redux";
import axios from "axios";

function Welcome(props) {
    
  

    const data=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(a=>{
            
            
            store.dispatch({type:"add",value:a.data})
            console.log(store.getState().c.data);
            props.value(a.data);
        })
    }
    
    
    return (
        <div style={{background:"green",padding:"10px 20px",height:"701px",color:"skyblue",fontFamily: "Goudy Stout"}}>
           <h1 style={{fontSize:"60px"}}>React-Redux</h1>
       {/*      <h1>Count {props.count}</h1>
      <button onClick={props.inc}>Increment</button>
                <button onClick={props.dec}>Decrement</button>
            <button onClick={props.reset}>Reset</button>
               <h5>[{props.arr} ]</h5>
                <button onClick={props.push}>push</button>
                 <button onClick={props.pop}>pop</button>
    <button onClick={props.reset1}>reset</button> */}
             <br></br><button style={{fontSize: "60px",
    margin: "31px 10px",
    width: "400px",
    borderRadius: "30px",
    color:" #ffff",
    background: "rgb(128 0 0 / 80%)",
    border: "2px solid #004b80",}} onClick={data}>data</button>
             {props.show.length ? props.show.map(a=>(
                 <div style={{background:"green"}} key={a.id}>{a.title}</div>
             )):null}
             
        </div>
    )
}

const map1=(state)=>{
    return({
        count: state.a.count,
        arr: state.b,
        show: state.c.data || []
    })
}

const map2=(dispatch)=>{
  return{
      inc: ()=>{dispatch({type:Inc})},
      dec: ()=>{dispatch({type:Dec})},
      reset: ()=>{dispatch({type:Reset})},
      push:()=>{dispatch({type:"push", value:Math.random()})},
      pop:()=>{dispatch({type:"pop"})},
      reset1:()=>{dispatch({type:"reset"})},
      value:(status)=>{
        dispatch({type:"add",value:status});
      }
  }
}

export default connect(map1,map2)(Welcome)
