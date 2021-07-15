import { Color } from 'ag-grid-community';
import React from 'react'
import { connect } from 'react-redux'
import { get } from '../redux/action'

function Hello(props) {
    
    const goal = ()=>{
        props.get1();
        console.log(props.data1)
        //console.log("data2"+props.data1)
    }

    return (
        <div style={{backgroundColor:""}}>
            <button style={{color:"green"}} onClick={props.get}>USER</button>
            <button style={{color:"red"}} onClick={goal}> POST</button>
            
            {props.data1.length == 0 ? props.data.map(a=>(
                <div style={{color:"green"}} key={a.id}><h1>{a.email}</h1></div>
            )): null}
  
           {props.data1.map(a=>(
                <div style={{color:"red"}} key={a.id}>{a.title}</div>
            ))} 
            
        </div>
    )
}

const a=(state)=>({
    data: state.reduce.data || [],
    data1: state.reduce.data1 || []
})

const b=(dispatch)=>({
    get: ()=>{
        dispatch({type:get})
    },
    get1: ()=>{
        dispatch({type:"get1"})
    }
})

export default connect(a,b)(Hello);
