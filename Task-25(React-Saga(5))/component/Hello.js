import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { get } from '../redux/action'

function Hello(props) {
    
    useEffect(() => {
        props.get();
        props.get1();
        }
    , [])

    const a={
        width:"100%",
        display:"flex",
        justifyContent:"center",
        height:"720px"
    }

    const b={
        width: "50%",
        backgroundColor:"red"
    }

    const c={
        width: "50%",
        backgroundColor:"blue"
    }

    const d={
        backgroundColor: "green",
        marginTop: "95px",
        padding: "10px 20px",
        fontSize: "18px",
        width: "477px",
        marginLeft:"128px",
        border: "1px solid yellow",
        borderRadius: "31px",
        color: "#cddc39"
    }
    
    const g={
        backgroundColor: "rgb(156 39 176 / 60%)",
    marginTop: "58px",
    padding: "3px 20px",
    fontSize: "3.76px",
    width: "477px",
    marginLeft: "139px",
    border: "1px solid yellow",
    borderRadius: "31px",
    color: "rgb(228 255 3)",
    height: "487px"
    }

    const h={
        fontFamily: "Engravers MT",
    color: "#ffff91",
    fontSize: "72px",
    textShadow: "2px 2px rebeccapurple",
    marginLeft: "-22px"
    }

    const h1={
        fontFamily: "Engravers MT",
    color: "#ffff91",
    fontSize: "72px",
    textShadow: "2px 2px #f01000",
    marginLeft: "-22px"
    }
    

    return (
        <div>
        <div style={a}>
           <div style={b}>
           <h1 style={h}>User API</h1>
               <div style={d}>
                   {props.data.map(a=>(
                       <p>{a.name}</p>
                   ))}
               </div>
           </div>
           <div style={c}>
           <h1 style={h1}>Post API</h1>
           <div style={g}>
           {props.data1.map(a=>(
                       <div>{a.title}</div>
                   ))}
               </div>
           </div>
           
        </div>
       
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
