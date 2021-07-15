import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { get } from '../redux/action'

function Hello(props) {
    
    useEffect(() => {
        props.get();
        props.get1();
        }
    , [])

    
    const a ={
        padding: "10px 20px"
    }

    const b={
        fontSize: "84px"
    }

    

    return (
        <div>
        <div style={a}>
            <h1>{props.data.name}</h1>
            <marquee direction="up">
            <center>
            <div >
              {props.data1.map(a=>(
                  <div>{a.title}</div>
              ))}
            </div>
            </center>
            </marquee>
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
