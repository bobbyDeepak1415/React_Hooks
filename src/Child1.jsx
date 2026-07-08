import React from "react";

const Child1 = (props) => {
  console.log("child rendering...");

  let name = "Deepak";

  return (
    <div>
      <h3>Child count at:{props.count}</h3>

    </div>
  );
};

export default React.memo(Child1);
