import React from "react";
import { useState } from "react";
export default function Count3() {
  const [count, setCount] = useState(0);
  //   const add = () => {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   };//发现这种情况只能加1，因为setCount是异步的，所以第一个setCount执行完后，count还是0，所以第二个setCount还是加1
  const add = () => {
    setCount((count) => count + 2);
  };
  return (
    <>
      <h1>Count的值是{count}</h1>
      <button onClick={add}>+2</button>
    </>
  );
}
