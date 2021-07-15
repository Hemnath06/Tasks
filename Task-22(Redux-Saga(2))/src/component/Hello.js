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
        backgroundColor:"rgb(109 121 142 / 60%)",
        height:"721px"
    }

    const b={
        color: "yellow",
    fontFamily: "Forte",
    fontWeight: "200",
    fontSize: "40px"
    }

    const c={
        color: "rgb(255 253 231 / 70%)",
        margin: "19px 0px 17px"
    }

    return (
        <div style={a}>
           <div  className="container" >
            <h3 style={b}>{props.data1.title}</h3>
            <p style={c}>{props.data1.body}</p>
              
            <table width="800px" class="table table-hover">
    <thead>
      <tr>
        <td><b>Firstname</b></td>
        <td><b>Username</b></td>
        <td><b>Email</b></td>
      </tr>
    </thead>
    <tbody>
      {props.data.map(a=>(
         <><tr className={a.id%2==0 ? "success":"warning"}>
         <td>{a.name}</td>
         <td>{a.username}</td>
         <td>{a.email}</td>
       </tr></>
      ))}
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
