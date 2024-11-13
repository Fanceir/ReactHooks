import React, { useEffect } from "react";

// //useEffect中清理副作用
// useEffect(() => {
//   //执行的操作
//   console.log("执行了useEffect");
//   //清理副作用
//   return () => {
//     console.log("清理副作用");
//   };
// }, []);
const ColorCom: React.FC = () => {
  const [color] = React.useState("red");
  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.liulongbin.top/v1/color`, { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    //清理函数出发的时机
    //1组件被卸载的时候
    //2useEffect被执行之前
    return () => controller.abort();
  }, []);

  return (
    <>
      <div>color的颜色 的值是{color}</div>
    </>
  );
};

export default function TestColorCom() {
  const [flag, setFlag] = React.useState(false);
  return (
    <>
      <button onClick={() => setFlag((flag) => !flag)}>toggle</button>
      {/* <button onClick={() => setFlag((flag) => !flag)}>toggle</button> */}
      {flag && <ColorCom />}
    </>
  );
}
