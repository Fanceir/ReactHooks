//自定义hook要以use开头
import React, { useEffect } from "react";
export const useMousePosition = (delay: number = 0) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  useEffect(() => {
    let timerID: null | NodeJS.Timeout = null;
    const mouseMoveHandler = (e: MouseEvent) => {
      if (timerID !== null) {
        return;
      }
      timerID = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        console.log(e.clientX, e.clientY);
        timerID = null;
      }, delay);
    };
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [position, delay]);
  return position;
};

type useCountDownType = (num: number) => [number, boolean];
export const useCountDown: useCountDownType = (num: number = 10) => {
  num = Math.round(Math.abs(num)) || 10;
  const [count, setCount] = React.useState(num);
  const [disabled, setDisabled] = React.useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (count > 1) {
        setCount((prev) => prev - 1);
      } else {
        //清除定时器
        setDisabled(false);
        clearTimeout(timerId);
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    }; //每次组件被卸载或者重新渲染时，都会执行return的函数
  }, [count]);
  return [count, disabled];
};
//自定义hook的时候要注意边界值的处理，以及对参数的处理
