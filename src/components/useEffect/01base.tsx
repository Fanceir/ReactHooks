import { useEffect, useState } from "react";
// useEffect 会在每次渲染后都执行没有使用第二个参数的依赖项数组
export default function Count() {
  const [count, setCount] = useState(0);
  const add = () => {
    return setCount((count) => count + 1);
  };
  useEffect(() => {
    console.log(document.querySelector("h1")?.innerText);
  });
  //如果省略了useEffect的第二个参数，那么useEffect会在每次渲染后都执行。
  return (
    <>
      <h1>Count:{count} </h1>
      <button onClick={add}> +1</button>
    </>
  );
}
