import React, { useState, useContext } from "react";

interface AppContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const AppContext = React.createContext<AppContextType>({} as AppContextType);
export const LevelA: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 10, backgroundColor: "red", width: "50vw" }}>
      <h1>LevelA,count的值是{count}</h1>
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
      <AppContext.Provider value={{ count, setCount }}>
        <LevelB />
      </AppContext.Provider>
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
