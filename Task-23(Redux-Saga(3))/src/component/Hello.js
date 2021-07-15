import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { get } from '../redux/action'

function Hello(props) {
    
    useEffect(() => {
        props.get();
        props.get1();
        }
    , [])

    const a = {
        backgroundColor:"darkgray",
        height:"721px"
    }

    const b={
        fontSize: "50px",
    textShadow: "2px 2px #cddc39 "
    }

    

    return (
        <div style={a} >
        <div  className="container">
           <h1 style={b}>{props.data.email}</h1>
           <p style={{fontFamily:"Corbel Light"}}>{props.data.phone}</p>
           <table style={{width:"100%"}} className="table-bordered table-hover">
              <thead>
                  <tr>
                      <td><b>name</b></td>
                      <td><b>username</b></td>
                      <td><b>email</b></td>
                  </tr>
              </thead>
              <tbody style={{backgroundColor:"rgb(235 230 228 / 60%)"}}>
              {props.data1.map(a=>(
               
           
                  <tr className="warning">
                      <td>{a.id}</td>
                      <td>{a.title}</td>
                      <td>{a.body}</td>
                  </tr> ))}
                  
              </tbody>
           </table>
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
