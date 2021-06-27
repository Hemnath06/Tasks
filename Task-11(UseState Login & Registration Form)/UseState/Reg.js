import React,{useState,useEffect} from "react";
import Side from "./4.jpg";


export default function Reg({name,pass}) {
    const [form,setForm] = useState({
        name1:"",
        pass1:""
    })

    const change= (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
     }

     const sub = (e)=>{
        e.preventDefault();
        console.log(form);
        if(name===form.name1 && pass==form.pass1){
            alert(`Logined Successfully`);
        }
        else{
            alert("Wrong Username / Wrong Password !!!");
        }        
    }   
 
    

    return (
        <div>
           <section>
      <div className="imgBx">
             <img src={Side} />
      </div>
      <div className="contentBx">
          <div className="formBx">
             <h2 id="header">Login</h2>
              <form onSubmit={sub}>
                  <div className="inputBx">
                        <span>Username</span>
                        <input type="text" name="name1" onChange={change} />
                  </div>
                  <div className="inputBx">
                        <span>Password</span>
                        <input type="password" name="pass1" onChange={change} />
                  </div>
                  

                  
                  
                  <div className="inputBx">
                         <input className="sub" type="submit" value="Submit" />
                  </div>
              </form>
          </div>
      </div>
      </section>
        </div>
    )
}

