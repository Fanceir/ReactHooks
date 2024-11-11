import { useRef, useState, useEffect } from "react";

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
  console.log("组件渲染了");
  //useEffect会在组件首次渲染完毕之后执行一次
  useEffect(() => {
    console.log("组件挂载了");
  }, [timeRef.current]);
  //ref.current不会引起组件重新渲染
  //useEffect的执行是在组件渲染之后，默认执行一次
  //组件每次渲染完毕之后会出发useEffect中的回调函数，如果有了依赖项，那么只有依赖项发生变化的时候才会触发useEffect中的回调函数
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
