import { useRef, useState } from "react";
export default function CountRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef<number | undefined>();
  //   function add() {
  //     setCount((count) => count + 1);
  //     countRef.current = count;
  //   }
  //useRef在组件首次被渲染的时候被创建，在重新渲染的时候不会重复创建Ref对象
  const add = () => {
    setCount((count) => count + 1);
    countRef.current = count;
  };
  return (
    <div>
      旧的值是{countRef.current} 新的值是{count}
      <button onClick={add}>+1</button>
    </div>
  );
}
