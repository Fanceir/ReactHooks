import React, { useEffect, useState, useMemo } from "react";

export const Father: React.FC = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  //   const tips = () => {
  //     console.log("触发了tips");
  //     return flag ? <p>1111</p> : <p>000</p>;
  //   };
  const memoTips = useMemo(() => {
    console.log("触发了memoTips");
    return flag ? <p>1111</p> : <p>000</p>;
  }, [flag]);
  //只在组件渲染
  return (
    <>
      <h1>父组件</h1>
      <p>count的值是{count}</p>
      <p>flag的值是{String(flag)}</p>
      {memoTips}
      {/* 注意useMemo的返回值是一个计算好的值，而不是一个函数 */}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>改变flag</button>
      <hr />
      <Son num={count} />
    </>
  );
};
export const Son: React.FC<{ num: number }> = React.memo(({ num }) => {
  useEffect(() => {
    console.log("子组件更新了");
  });
  return <h1>子组件接收到的值是{num}</h1>;
});
