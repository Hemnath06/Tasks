import React from "react";

function Button({ value, handle, name }) {
  console.log(`button rendering ${name}`);

  const btn={
   background:"rgb(33 243 237 / 80%)",
   width:"200px",
   fontSize:"30px",
   fontWeight:"600",
   fontFamily:"italic",  
   padding:"20px 10px",
   cursor:"pointer" 
}

  return (
    <div>
      <h1>
        {name} {value}
      </h1>
      <button style={btn} onClick={handle}>{name}</button>
    </div>
  );
}

export default React.memo(Button);
