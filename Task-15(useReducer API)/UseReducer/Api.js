import React, { useReducer, useState, useEffect } from "react";
import {AgGridColumn,AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import slide from "./1.jpg";

import axios from "axios";
const a = {
  load: "Loading...",
  err: "",
  data: []
};

const reduce = (state, action) => {
  switch (action.event) {
    case "success":
      return {
        loading: "",
        data: action.value,
        error: ""
      };
    case "fail":
      return {
        loading: "",
        data: "",
        error: "there is something wrong"
      };
    default:
      return state;
  }
};

export default function Api() {
  const [A, setA] = useReducer(reduce, a);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((a) => {
        setA({ event: "success", value: a.data });
        
      })
      .catch((b) => {
        setA({ event: "fail" });
      });
  }, []);

  const hed={
      color:"#fff",
      fontSize:"30px",
      textAlign:"center",
      marginLeft:"210px",
      width:"400px",
      fontFamily:"Algerian",
      textShadow:"2px 2px 20px #000",
      marginTop:"10px",
      padding:"10px 20px"
  }

  const bg={
      background:`url(${slide})`,
      backgroundSize:"cover",
      objectFit:"cover",
      height:"711px"
  }

  return (
    <div style={bg}>
    
    
     <div className="ag-theme-alpine" style={{height:"620px",width:"800px",fontFamily:"Kristen ITC",marginLeft:"400px"}}>
     {A.load ? <h1 style={hed} >{A.load}</h1>  : <>
      <h1 style={hed} >API using UseREducer</h1>
      <AgGridReact rowData={A.data} >
        <AgGridColumn field="userId"></AgGridColumn>
        <AgGridColumn field="title"></AgGridColumn>
        <AgGridColumn field="id"></AgGridColumn>
        <AgGridColumn field="body"></AgGridColumn>

      </AgGridReact></> }
      </div>

      {A.error ? A.error : null}
    </div>
  );
}
