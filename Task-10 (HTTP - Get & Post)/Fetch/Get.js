import axios from "axios";
import React, { Component } from 'react'
import "./Get.css";

export class Get extends Component {

   constructor(){
       super();
       this.state={
          data:[],
          count1 : "bg1",
          count2: "bg2"
       }
       this.a={
        marginLeft:"560px",
        width: "100%",
        borderRadius:"10px",
        padding:"10px 10px",
        
        marginTop: "20px"
    };
 
   }

   componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(a=>{
           this.setState({
               data: a.data
           })
       })
   }

   
  

    render() {
        const {data,count1,count2} = this.state;
        return (<>
        
         <div className="get">
            <div className="container">
            <h1 style={{...this.a}}>HTTP Get Method (Data)</h1>
           
            {
                data.map(c=>(

                
            
                <div className={c.id%2===0? "bg2" : "bg1"}>
                    <h2>{c.id}</h2>
                    <p>{c.title}</p>
                    </div>
               
                )) 
                
            }
            
               
                        
            </div></div></>
        )
    }
}

export default Get
