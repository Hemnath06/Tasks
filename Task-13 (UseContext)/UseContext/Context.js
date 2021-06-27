import React, { Component } from 'react'
import axios from "axios";
import Use from "./Use";


export const A = React.createContext();

export const B = React.createContext();

export class Context extends Component {
    
    constructor(){
        super();
        this.state={
            name:""
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(a=>{
            this.setState({name:a.data})
        })
    }

    componentDidUpdate(){
        for(let i=1;i<30;i++){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .then(a=>{
            this.setState({name:a.data})
        })
    }
    }


    render() {
        const {name} = this.state;
        return (
            <div>
                <A.Provider value={name}>
                    <B.Provider value={name}>
                       <Use />
                    </B.Provider>
                </A.Provider>
                
            </div>
        )
    }
}

export default Context
