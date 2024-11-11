import React from "react";
import { useRef, useState, useImperativeHandle } from "react";

interface ChildHandle {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Child = React.forwardRef<ChildHandle>((_, ref) => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => count + 1);
  };

  useImperativeHandle(ref, () => ({
    count,
    setCount,
  }));

  return (
    <>
      <h3>count的值是{count}</h3>
      <button onClick={add}>+1</button>
    </>
  );
});

export const Father: React.FC = () => {
  const childRef = useRef<ChildHandle>(null);
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
