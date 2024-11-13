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
  }, []);
  return position;
};
