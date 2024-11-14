import React, { useContext } from "react";

//使用非侵入式的组件来实现
type AppContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const AppContext = React.createContext<AppContextType>({} as AppContextType);

export const AppContextWrapper: React.FC<React.PropsWithChildren> = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <AppContext.Provider value={{ count, setCount }}>
      {props.children}
    </AppContext.Provider>
  );
};
export const LevelA: React.FC = () => {
  const { count, setCount } = useContext(AppContext);
  return (
    <div style={{ padding: 10, backgroundColor: "red", width: "50vw" }}>
      <h1>LevelA,count的值是{count}</h1>
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
      <LevelB />
    </div>
  );
};
export const LevelB: React.FC = () => {
  return (
    <div style={{ padding: 30, backgroundColor: "pink" }}>
      <h2>LevelB</h2>
      <LevelC />
    </div>
  );
};

export const LevelC: React.FC = () => {
  const ctx = useContext(AppContext);
  const add = () => {
    ctx.setCount(ctx.count + 1);
  };
  return (
    <div style={{ padding: 30, backgroundColor: "green" }}>
      <p>count 的值是:{ctx.count}</p>
      <button onClick={add}>+1</button>
      <button onClick={() => ctx.setCount(0)}>重置</button>
    </div>
  );
};
