import React from "react";
import { useRef, useState } from "react";

const Child = React.forwardRef(() => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h3>count的值是{count}</h3>
      <button onClick={add}>+1</button>
    </>
  );
});
export const Father: React.FC = () => {
  const childRef = useRef();
  const showRef = () => {
    console.log(childRef.current);
  };
  return (
    <>
      <h1>这是Father组件</h1>
      <Child ref={childRef} />
      <button onClick={showRef}>showRef</button>
    </>
  );
};
//发现这样打印出来是undefined，这就需要使用useImperativeHandle来解决这个问题
