import React, { Component } from "react";
import "./Post.css";
import Side from "./2.jpg";
import axios from "axios";

export default class Post extends Component{
  
  constructor(){
      super();
      this.state ={
          name:"",
          rollno:"",
          email:"",
          data:[]
      }
  }

  
  change=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
    
  }

    


  sub=(e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then(a=>{
      console.log(a.data)
      this.setState({
          data: a.data
      })
  })
}
  
  

  render(){
    return(
    <>
     <section>
      <div className="imgBx">
             <img src={Side} />
      </div>
      <div className="contentBx">
          <div className="formBx">
             <h2 id="header">HTTP - Post</h2>
              <form onSubmit={this.sub}>
                  <div className="inputBx">
                        <span>Username</span>
                        <input type="text" name="name" value={this.state.name} onChange={this.change}/>
                  </div>
                  <div className="inputBx">
                        <span>RollNo</span>
                        <input type="text" name="rollno" value={this.state.password} onChange={this.change} />
                  </div>
                  <div className="inputBx">
                        <span>Email</span>
                        <input type="text" name="email" value={this.state.email} onChange={this.change} />
                  </div>

                  
                  
                  <div className="inputBx">
                         <input className="sub" type="submit" value="Post" />
                  </div>
              </form>
          </div>
      </div>
      </section>
      
      
    </>
    )
  }
}