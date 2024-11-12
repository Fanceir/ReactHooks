import React from "react";
import { useRef, useState, useImperativeHandle } from "react";

const Child = React.forwardRef((_, ref) => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const add = () => {
    setCount((count) => count + 1);
  };
  useImperativeHandle(ref, () => {
    console.log("执行了回调函数");
    return { count, reset: () => setCount(0) };
  });
  //首次被渲染的时候会执行一次回调函数
  //*注意因为这里的[]是空数组，所以只会在首次渲染的时候执行一次回调函数，
  //*所以要加上count
  //可以使用useImperativeHandle来控制暴露给父组件的ref对象

  //如果不加上依赖数组，那么每次组件重新渲染的时候都会执行回调函数
  return (
    <>
      <h3>count的值是{count}</h3>
      <button onClick={add}>+1</button>
      <p>flag:{String(flag)}</p>
      <button onClick={() => setFlag((prev) => !prev)}>toggleFlag</button>
    </>
  );
});

export const Father: React.FC = () => {
  const childRef = useRef<{
    count: number;
    setCount: (value: number) => void;
    flag: boolean;
  }>(null);
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
