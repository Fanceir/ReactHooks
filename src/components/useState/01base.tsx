import React from "react";

export const Count: React.FC = () => {
  console.log("导入了Count组件");
  const [count, setCount] = React.useState(0);
  //调用useState可以给他一个初始值
  //z只要状态发生变化就会有一个新的值
  //已经渲染过一遍了之后会修改状态，不会重新赋初值
  console.log("触发了useState");
  const add = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  //第一个是状态值，第二个要以set开始使用小驼峰来进行命名
  return (
    <>
      <h1>Count的值是{count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={reset}>重置</button>
    </>
  );
};
