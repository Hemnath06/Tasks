import React,{useContext} from 'react'
import {A} from "./Counter1";


function Counter3() {
    const B = React.useContext(A);

    const hem={
        background:`${B.a.second}`,
        color:"#000"
    }
    
       
    
       const col={
            color:"blue",
            width:"30px",
            marginLeft:"600px",
            
       }
    
       const btn1={
           fontSize:"40px",
           background:"transparent",
           marginRight:"30px"
       }
    
       const btn2={
        fontSize:"40px",
        background:"transparent",
        marginRight:"40px"
    }
    const btn3={
        fontSize:"20px",
        width:"400px",
        background:"transparent",
        marginRight:"30px"
    }

    const hed={
        fontSize:"200px",
        marginLeft:"700px"
    }

    return (
        <div>
           
            <div style={hem}>
            <h1 style={hed}>{B.a.first}</h1>
            <div style={col}>
            <button style={btn3} onClick={()=>{B.b({target:"red"})}}>Color change RED</button>
            <button style={btn1} onClick={()=>{B.b({target:"increment", value:1})}}>increment</button>
            <button style={btn2} onClick={()=>{B.b({target:"decrement", value:1})}}>decrement</button>
            <button style={btn2} onClick={()=>{B.b({target:"reset"})}}>Reset</button>
            
            </div>
            </div>
        </div>
    )
}

export default Counter3
