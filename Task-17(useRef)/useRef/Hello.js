import React, { useEffect, useState } from "react";

export default function Hello(){
  
  const [timer,setTimer] = useState(0)
  const [data, setdata] = useState("")
 
  const A = React.useRef();

  const interval = React.useRef();
  useEffect(()=>{
    interval.current = setInterval(()=>{
      setTimer((prevState)=>(prevState+1))
    },1000)
  A.current.focus();
    return()=>{clearInterval(interval.current)}
  },[])

  const bg={
      backgroundColor:`#4${timer}${timer}`,
      padding:"10px 20px",
      height:"700px",
      
  }

  const change=()=>{clearInterval(interval.current)}

  const hd={color:"orange",textShadow:`${timer}px ${timer}px ${timer}px red`,fontFamily:"Harrington",
  fontSize:"100px",marginLeft:"499px"

}

const In={
    width:"300px",
    padding:"40px 60px",
    fontSize:"50px",
    fontFamily:"Harrington",
    outline:"none",
    borderRadius:"100px",
    border:`1${timer}px solid #f72${timer}`,
    color: `rgb(255 0 0 / 80%)`,
    fontWeight:"300",
    marginLeft:"499px",
    marginBottom:"0px"
}

const msg={
    color:"orange",textShadow:`${timer}px ${timer}px ${timer}px red`,fontFamily:"Harrington",
  fontSize:"70px",width:"800px",marginLeft: "346px",marginTop: "34px"
}
  
  

  return(
    <div style={bg}>
      {data==="stop"? <div style={msg}>Counter has been stoped {change()}</div>: null}
      <h1 style={hd}>Count - {timer}</h1>
      <input style={In} type="text" placeholder="Enter 'stop'" ref={A} onChange={(e)=>{setdata(e.target.value)}} />
      
    
    
    </div>
  )
}
