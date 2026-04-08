import React, { useState ,memo} from "react";

const Child1 = ({ updatedValue,count }) => {
  const [title, setTitle] = useState("");

  console.log("child rendering...")

  return (
    <div>
      <h1>Child count is at:{count}</h1>
      <h2>{title}</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={updatedValue}>Child Increment</button>
    </div>
  );
};

export default memo(Child1);
