import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState([]);

  return (
    <div>
      <h2>Count is now at:{count}</h2>
      <button
        onClick={() => {
          setNums([...nums, count]);
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>

      <div>
        {nums.map((num) => {
          return <p>{num}</p>;
        })}
      </div>
    </div>
  );
};

export default Demo;
