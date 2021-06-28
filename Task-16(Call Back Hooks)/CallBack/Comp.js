import React, { useState, useCallback,useEffect } from "react";
import Button from "./Button";
import Header from "./Header";

export default function Comp() {
  const [age, setAge] = useState(0);
  const [salary, setSal] = useState(50000);

  const [x, setx] = useState(0);


  const ChangeAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const ChangeSal = useCallback(() => {
    setSal(salary + 1000);
  }, [salary]);

  const bd={
      textAlign:"center",
      background:"pink",
      padding:"10px 20px",
      height:"700px",
      marginbottom:"100px"
  }

  const hd={
      fontSize:"30px",
      fontFamily:"Jokerman",
      
  }

  const Is={
      fontSize:"20px",
      fontFamily:"Jokerman"
  }
  

  return (
    <div style={bd}>
      <div style={hd}>
      <Header />
      </div>
      <div style={Is}>
      <Button handle={ChangeAge} value={age} name="age" />
      <Button handle={ChangeSal} value={salary} name="salary" />
      </div>
    </div>
  );
}
