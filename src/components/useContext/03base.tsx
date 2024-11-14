//使用immer编写简洁的useReducer
import React, { useContext } from "react";
import { useImmerReducer } from "use-immer";
// const [state,dispatch]=useReducer(reducer,initialState,initAction)
//initialState:初始状态
//initAction:初始action
//useReducer是useState的替代方案
const defaultState = { name: "fanceir", age: 0 };
//在reducer的函数中第一个参数是prevState,第二个参数是action
//必须返回一个新状态
type ContextType = {
  user: UserType;
  dispatch: React.Dispatch<ActionType>;
};
const UserInfoContext = React.createContext<ContextType>({} as ContextType);
export const UserInfoContextWrapper: React.FC<React.PropsWithChildren> = (
  props
) => {
  const [state, dispatch] = useImmerReducer(reducer, defaultState, initAction);
  return (
    <UserInfoContext.Provider value={{ user: state, dispatch }}>
      {props.children}
    </UserInfoContext.Provider>
  );
};

//!使用initAction来处理初始数据，可以修改其中的非法值
type UserType = typeof defaultState;
type ActionType =
  | { type: "UPDATE_NAME"; payload: string }
  | { type: "UPDATE_AGE"; payload: number }
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };
const initAction = (initState: UserType) => {
  return { ...initState, age: Math.round(Math.abs(initState.age)) || 18 };
};
const reducer = (prevState: UserType, action: ActionType) => {
  console.log("触发reducer");
  console.log(action);
  switch (action.type) {
    case "UPDATE_NAME":
      prevState.name = action.payload;
      break;
    case "UPDATE_AGE":
      prevState.age = action.payload;
      break;
    case "INCREMENT":
      prevState.age += action.payload;
      break;
    case "DECREMENT":
      prevState.age -= action.payload;
      break;
    case "RESET":
      return initAction(defaultState);
    default:
      return prevState;
  }
};
export const Father: React.FC = () => {
  //   console.log(state);
  const { user: state, dispatch } = useContext(UserInfoContext);
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
  const { user, dispatch } = useContext(UserInfoContext);
  const add = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  return (
    <div className="child1">
      Child1
      <p>{JSON.stringify(user)}</p>
      <button onClick={add}>年龄加一</button>
    </div>
  );
};
export const Child2: React.FC = () => {
  const { user, dispatch } = useContext(UserInfoContext);
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 5 });
  };
  return (
    <div className="child2">
      Child2
      <p>{JSON.stringify(user)}</p>
      <button onClick={decrement}>年龄-5</button>
      <hr />
      <Grandson />
    </div>
  );
};
const Grandson: React.FC = () => {
  const { dispatch } = useContext(UserInfoContext);
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div className="grandson">
      这是Grandson组件
      <button onClick={reset}>重置</button>
    </div>
  );
};
