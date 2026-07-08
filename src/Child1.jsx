import React from "react";

const Child1 = (props) => {

    console.log("child rendering...")
  

  return <div>
    <h3>Child count at:{props.count}</h3>
  </div>;
};

export default Child1;
