import React from "react";

function Header() {
  console.log("header is rendering");
  return (
    <div>
      <h1>Person detail</h1>
    </div>
  );
}

export default React.memo(Header);
