import { useRef, useState } from "react";

export default function CountTimeRef() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((count) => count + 1);
  };
  const timeRef = useRef(Date.now());
  const updateTime = () => {
    timeRef.current = Date.now();
    console.log(timeRef.current);
  };
  return (
    <>
      <h1>
        count的值是{count}time的值是{timeRef.current}
      </h1>
      <button onClick={add}>+1</button>
      <button onClick={updateTime}>更新时间</button>
    </>
  );
}
//这里虽然ref是发生变化了，但是组件没有重新渲染，但是在是又点了一次+1按钮
//这个时候timeRef.current就会更新了
