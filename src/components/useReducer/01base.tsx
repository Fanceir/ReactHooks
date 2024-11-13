import React, { useReducer } from "react";
// const [state,dispatch]=useReducer(reducer,initialState,initAction)
//initialState:初始状态
//initAction:初始action
//useReducer是useState的替代方案
const defaultState = { name: "fanceir", age: 0 };
//在reducer的函数中第一个参数是prevState,第二个参数是action
//必须返回一个新状态

//!使用initAction来处理初始数据，可以修改其中的非法值
type UserType = typeof defaultState;
type ActionType =
  | { type: "UPDATE_NAME"; payload: string }
  | { type: "UPDATE_AGE"; payload: number };
const initAction = (initState: UserType) => {
  return { ...initState, age: Math.round(Math.abs(initState.age)) || 18 };
};
const reducer = (prevState: UserType, action: ActionType) => {
  console.log("触发reducer");
  console.log(action);
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...prevState, name: action.payload };
    case "UPDATE_AGE":
      return { ...prevState, age: action.payload };
    default:
      return prevState;
  }
};
export const Father: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState, initAction);
  //   console.log(state);
  const changeUserName = () => {
    //不要在这里直接修改state数据
    dispatch({ type: "UPDATE_NAME", payload: "fanceir1" });
  };

  return (
    <div>
      <button onClick={changeUserName}>修改用户名</button>
      <div>姓名为：{state.name}</div>
      <div className="father">
        <Child1 />
        <Child2 />
      </div>
    </div>
  );
};

export const Child1: React.FC = () => {
  return <div className="child1">Child1</div>;
};
export const Child2: React.FC = () => {
  return <div className="child2">Child2</div>;
};
