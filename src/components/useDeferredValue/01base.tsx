import React, { useDeferredValue, useState } from "react";
export const SearchBox: React.FC = () => {
  const [kw, setKw] = useState("");
  //根据指定的状态创建延迟版本的State状态
  const deferredKw = useDeferredValue(kw);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKw(e.target.value);
  };
  //在文本框高频输入的时候会导致中间的状态卡顿

  return (
    <>
      <div style={{ height: "500" }}>
        <input type="text" value={kw} onChange={onInputChange} />
        <hr />
        <div
          style={{
            opacity: kw !== deferredKw ? 0.3 : 1,
            transition: "opacity 0.5s ease",
          }}
        >
          <SearchResults query={deferredKw} />
        </div>
      </div>
    </>
  );
};

export const SearchResults: React.FC<{ query: string }> = React.memo(
  (props) => {
    const items = Array(40000)
      .fill(props.query)
      .map((item, i) => <p key={i}>{item}</p>);
    return <>{items}</>;
  }
);
