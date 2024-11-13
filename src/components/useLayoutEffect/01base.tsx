//useEffect是组件渲染后执行的，useLayoutEffect是在组件渲染前执行的

import React, { useLayoutEffect } from "react";

//这是同步执行的，所以会阻塞渲染，所以要慎用
export const RandomNumber: React.FC = () => {
  const [number, setNumber] = React.useState(Math.random() * 200);
  //   useEffect(() => {
  //     console.log("触发了useEffect的判断");
  //     if (number === 0) setNumber(Math.random() * 200);
  //   }, [number]);
  //这种有一瞬间会显示0，然后再变成随机数
  useLayoutEffect(() => {
    console.log("触发了useLayoutEffect的判断");
    if (number === 0) setNumber(Math.random() * 200);
  }, [number]);
  return (
    <div>
      {number}
      <button onClick={() => setNumber(0)}>把num改成0</button>
    </div>
  );
};
