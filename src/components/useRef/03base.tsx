import { useRef, useState } from "react";

export default function CountTimeRef() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((count) => count + 1);
  };
  const timeRef = useRef(Date.now());
  return (
    <>
      <h1>
        count的值是{count}time的值是{timeRef.current}
      </h1>
      <button onClick={add}>+1</button>
    </>
  );
}
//在组件首次初始化的一次会渲染一次
