//useMemo返回值是一个计算好的值，而不是一个函数
//useCallback返回的是一个函数，这个函数是经过优化的，只有在依赖改变的时候才会重新创建
//省略array的时候，每次都会重新创建
//array为空数组的时候，只会创建一次
const set = new Set();
import React, { useCallback, useState } from "react";
export const Search: React.FC = () => {
  const [kw, setKw] = useState("");
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKw(e.target.value);
  }, []);
  set.add(onchange);
  console.log(set.size);
  return (
    <>
      <input type="text" value={kw} onChange={onchange} />
      <p>输出的内容是:{kw}</p>
    </>
  );
};
//可以在函数中对频繁创建的函数进行优化
