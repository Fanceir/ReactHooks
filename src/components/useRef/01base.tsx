//使用useRef获取DOM元素
import React, { useRef } from "react";

export const InputFocus: React.FC = () => {
  const InputRef = useRef<HTMLInputElement>(null);
  const getFocus = () => {
    console.log("InputRef:", InputRef);
    InputRef.current?.focus(); //有可能是没有值的，所以要加个问号
  };
  return (
    <>
      <input type="text" ref={InputRef} />
      <button onClick={getFocus}>获取焦点</button>
    </>
  );
};
