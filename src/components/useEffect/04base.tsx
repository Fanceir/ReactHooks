import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const add = () => {
    return setCount((count) => count + 1);
  };
  const changeFlag = () => {
    setFlag(!flag);
  };
  useEffect(() => {
    // setCount((prev) => prev + 1); 会造成死循环
    console.log(document.querySelector("h1")?.innerText);
  }, [count]);
  useEffect(() => {
    // setCount((prev) => prev + 1); 会造成死循环
    console.log(document.querySelector("h2")?.innerText);
  }, [flag]);
  // useEffect 如果是空数组那么就会在组件渲染首次渲染完毕之后执行
  return (
    <>
      <h1>Count:{count} </h1>
      <h2>Flag的值是{String(flag)}</h2>
      <button onClick={add}> +1</button>
      <button onClick={changeFlag}>改变Flag</button>
    </>
  );
}
