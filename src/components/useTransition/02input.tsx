import React, { useState, useTransition } from "react";
export const SearchBox: React.FC = () => {
  const [kw, setKw] = useState("");
  const [, startTransition] = useTransition();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setKw(e.target.value);
    });
  };
  //在文本框高频输入的时候会导致中间的状态卡顿

  return (
    <>
      <div style={{ height: "500" }}>
        <input type="text" value={kw} onChange={onInputChange} />
        <hr />
        <SearchResults query={kw} />
      </div>
    </>
  );
};

export const SearchResults: React.FC<{ query: string }> = (props) => {
  const items = Array(40000)
    .fill(props.query)
    .map((item, i) => <p key={i}>{item}</p>);
  return <>{items}</>;
};
