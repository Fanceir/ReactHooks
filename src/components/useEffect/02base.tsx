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
    console.log(document.querySelector("h1")?.innerText);
  }, [count]);
  // useEffect 会在每次渲染后看依赖项数组是否有变化，如果有变化则执行
  
  return (
    <>
      <h1>Count:{count} </h1>
      <h2>Flag的值是{String(flag)}</h2>
      <button onClick={add}> +1</button>
      <button onClick={changeFlag}>改变Flag</button>
    </>
  );
}
