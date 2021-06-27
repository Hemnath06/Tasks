import React,{useState, useEffect} from "react";
import Comp3 from "./Comp3";

export default function Comp2() {

    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    const [display,setDisplay] =useState(true) 
    
    const cont ={
        backgroundColor: `#${Y}${X}`,
        width:"1536px",
        height:"720px",
        color:"#fff"
    }

    const change=(e)=>{
      setX(
          e.clientX
          )  
      setY(
        e.clientY
    )  
    
    }

    useEffect(() => {

        window.addEventListener("mousemove",change);
        console.log("mounting");
        
        return()=>{
            window.removeEventListener("mousemove",change);
        };
    },[]);



    const change1 = ()=>{
        setDisplay(false)
    }

    return(
        <div>
            {
                display &&
                
                <div style={cont}>
            
            <button className="btn" onClick={change1}>Click</button>
            <h1 style={{color:`#${X}000`,textShadow: `2px 2px 5px #${X}`}}>X: {X}<p style={{color:`#000${Y}`,textShadow: `2px 2px 5px #${Y}`}}> Y: {Y}</p></h1>
            
        </div>
        
                
            }
        </div>
    )
        }