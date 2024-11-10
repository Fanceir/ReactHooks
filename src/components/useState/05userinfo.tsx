import React, { useState } from "react";

export const Userinfo: React.FC = () => {
  const [user, setUser] = useState({
    name: "faa",
    age: 18,
    gender: "男",
  });
  const onChangeUser = () => {
    user.name = "bbb";
    user.age = 20;
    setUser({ ...user });
  };
  return (
    <>
      <h1>用户信息</h1>
      <p>姓名：{user.name}</p>
      <p>年龄: {user.age}</p>
      <p>性别: {user.gender}</p>
      <button onClick={onChangeUser}>修改信息</button>
    </>
  );
};
export const ForceUpdateCom: React.FC = () => {
  const [, forceUpdate] = useState({});
  const onRefresh = () => {
    forceUpdate({});
  };
  return (
    <>
      <h1>强制更新</h1>
      <button onClick={onRefresh}>点击强制组件刷新{Date.now()}</button>
    </>
  );
};
