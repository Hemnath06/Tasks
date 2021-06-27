import React,{useState,useEffect} from 'react'
import "./Comp1.css"

function Comp1() {

    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)
    
    const cont ={
        backgroundColor: `#${Y}${X}`,
        width:"1536px",
        height:"720px",
        color:"#fff"
    }

    const change=(e)=>{
      setX(
          e.clientX)  
      setY(
        e.clientY
    )   
    }

    useEffect(() => {
        window.addEventListener("mousemove",change)
    },[])
    
    return (
        <div style={cont}>
            <h1 style={{color:`#${X}000`,textShadow: `2px 2px 5px #${X}`}}>X: {X}<p style={{color:`#000${Y}`,textShadow: `2px 2px 5px #${Y}`}}> Y: {Y}</p></h1>
        </div>
    )
}

export default Comp1
