import React from "react";

const Child1 = ({count}) => {

  console.log('child rendering...')
  return <div>


    <h1>Child count is at:{count}</h1>
  </div>;
};

export default Child1;
