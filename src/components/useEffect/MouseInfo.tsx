import React from "react";
import { useMousePosition } from "../../hooks";
export default function MouseInfo() {
  const position = useMousePosition(100);
  return <div>MouseInfo:MousePosition{JSON.stringify(position)}</div>;
}

export const TestMouseInfo: React.FC = () => {
  const [flag, setFlag] = React.useState(false);

  return (
    <div>
      <button onClick={() => setFlag((prev) => !prev)}>Test MouseInfo</button>
      <hr />
      {flag && <MouseInfo />}
    </div>
  );
};

//使用了useEffect的组件，当组件被卸载时，会执行return的函数
//增加节流函数的使用，避免频繁触发
//增加了delay参数，用于控制节流函数的时间间隔，封装为自定义hook
