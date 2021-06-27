import React, {useState} from "react";
import Reg from "./Reg";
import Side from "./1.jpg";
import "./Login.css";

function Login() {
    const [form,setForm] = useState({
        name:"",
        password:"",
        pass1:"",
        display:true
    })

    const [data,setData] = useState("")

    const change= (e)=>{
       setForm({
           ...form,
           [e.target.name] : e.target.value
       })
    }

    const sub = (e)=>{
        e.preventDefault();
        console.log(form)
        if(form.pass1===form.password){
        setData(
            <Reg name={form.name} pass={form.password}/>
        )
        alert("Registration Done Successfully")
        setForm({
            ...form,
            display:false
        })
        }
        else{
            alert("Please re-enter the password correctly !!!")
        }
        
    }

    return (
        form.display===true ?
        <div>
           {data}
           <section>
      <div className="imgBx">
             <img src={Side} />
      </div>
      <div className="contentBx">
          <div className="formBx">
             <h2 id="header">SignUp</h2>
              <form onSubmit={sub}>
                  <div className="inputBx">
                        <span>Enter Username</span>
                        <input type="text" name="name" onChange={change} />
                  </div>
                  <div className="inputBx">
                        <span>Enter Password</span>
                        <input type="password" name="password" onChange={change} />
                  </div>
                  <div className="inputBx">
                        <span>Re-Enter Password</span>
                        <input type="password" name="pass1" onChange={change} />
                  </div>

                  
                  
                  <div className="inputBx">
                         <input className="sub" type="submit" value="Submit" />
                  </div>
              </form>
          </div>
      </div>
      </section>

        </div> : <>{data}</>

    )
        
}

export default Login
