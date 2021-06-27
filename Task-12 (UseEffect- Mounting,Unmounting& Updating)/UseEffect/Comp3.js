import React,{useState,useEffect} from 'react'
import "./Comp1.css";
import Comp2 from './Comp2';
import axios from "axios";
import { A, B } from '../UseContext/Context';

function Comp3({value}) {

    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)
    const [data,setData] = useState({
        name:[],
        color:234
    })
     
    let count=1

    const cont ={
        backgroundColor: `#${X}${Y}`,
        width:"100%",
        height:"100%",
        color:"red",
        textAlign:"center"
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

        window.addEventListener("mousemove",change)
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(a=>{
            console.log(a)
            setData({name:a.data})
        })
        
         
    })

    const change1 = ()=>{
        value= 0
    }
    
    return (
        <div style={cont}>  
        <h4 style={{color:"#000",fontSize:"26px",marginBottom:"10px"}}>HTTP using UseEffect</h4> 
        
            {data.name.map(b=>(
                
                <div key={B.id}>{b.title}</div>
                
            ))} 
            
        </div>
    )
}

export default Comp3
