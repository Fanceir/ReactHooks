import React from "react";
import { useRef, useState, useImperativeHandle } from "react";

const Child = React.forwardRef((_, ref) => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => count + 1);
  };

  useImperativeHandle(ref, () => ({
    count,
    setCount,
  }));
  //可以使用useImperativeHandle来控制暴露给父组件的ref对象
  return (
    <>
      <h3>count的值是{count}</h3>
      <button onClick={add}>+1</button>
    </>
  );
});

export const Father: React.FC = () => {
  const childRef = useRef<{ count: number; setCount: (value: number) => void }>(
    null
  );
  const showRef = () => {
    console.log(childRef.current);
  };
  const onReset = () => {
    childRef.current?.setCount(0);
  };
  return (
    <>
      <h1>这是Father组件</h1>
      <button onClick={showRef}>展示ref</button>
      <button onClick={onReset}>重置</button>
      <Child ref={childRef} />
    </>
  );
};
