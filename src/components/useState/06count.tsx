import React, { useState } from "react";
export default function Count4() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count的值是 {count}</h1>
      <button onClick={add}>+1</button>
    </>
  );
}
