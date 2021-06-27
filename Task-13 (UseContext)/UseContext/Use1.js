import React from 'react'
import {A} from "./Context"
import {B} from "./Context"
import Use2 from './Use2';
import "./Use.css";


function Use1() {

    const data = React.useContext(A);
    
    const data1 = React.useContext(B);
    return (<>
        <div className="container">
            <h1 className="header">Data Displaying (UseContext)</h1>
            <div className="box">
            <h3> {data.userId}</h3>
            <h1>{data1.id}</h1>

            <Use2 />  
            </div>         
        </div>
        </>
    )
}

export default Use1
