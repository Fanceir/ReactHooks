import React, { useCallback, useEffect } from "react";
type SearchInputType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type WordType = {
  id: number;
  word: string;
};
export const SearchBox: React.FC = () => {
  const [kw, setKw] = React.useState("");
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKw(e.target.value);
  }, []);
  return (
    <>
      <SearchInput onChange={onchange} />
      <hr />
      <SearchResult query={kw} />
    </>
  );
};

export const SearchInput: React.FC<SearchInputType> = React.memo(
  ({ onChange }) => {
    useEffect(() => {
      console.log("SearchInput被渲染了");
    });
    return (
      <>
        <input type="text" onChange={onChange}></input>
      </>
    );
  }
);

export const SearchResult: React.FC<{ query: string }> = (props) => {
  const [list, setList] = React.useState<WordType[]>([]);
  React.useEffect(() => {
    if (props.query === "") return setList([]);
    fetch(`https://api.liulongbin.top/v1/words?kw=` + props.query)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0]);
        setList(res.data);
      });
  }, [props.query]);
  return (
    <>
      {list.map((item) => (
        <p key={item.id}>{item.word}</p>
      ))}
    </>
  );
};
