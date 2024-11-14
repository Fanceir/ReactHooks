import React, { useState, useTransition } from "react";
export const TabsContainer: React.FC = () => {
  const [activeTab, setActive] = useState("home");
  const onBtnClick = (tabName: string) => {
    startTransition(() => {
      setActive(tabName);
    });
  };
  const [isPending, startTransition] = useTransition();
  const renderTab = () => {
    if (isPending) return <h3>Loading...</h3>;
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "movie":
        return <MovieTab />;
      case "about":
        return <AboutTab />;
    }
  };
  return (
    <div style={{ height: "500px" }}>
      {/* 按钮区域     */}

      {/* 标签区域 */}
      <TabButton
        isActive={activeTab === "home"}
        onClick={() => onBtnClick("home")}
      >
        首页
      </TabButton>
      <TabButton
        isActive={activeTab === "movie"}
        onClick={() => onBtnClick("movie")}
      >
        电影
      </TabButton>
      <TabButton
        isActive={activeTab === "about"}
        onClick={() => onBtnClick("about")}
      >
        关于
      </TabButton>
      {renderTab()}
      <hr />
    </div>
  );
};
export const TabButton: React.FC<
  React.PropsWithChildren & { onClick: () => void; isActive: boolean }
> = (props) => {
  return (
    <button
      className={["btn", props.isActive ? "active" : " "].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export const HomeTab: React.FC = () => {
  return <div>HomeTab</div>;
};
//模拟创建一个耗时的组件

export const MovieTab: React.FC = () => {
  const items = Array(100000)
    .fill("movieTab")
    .map((item, i) => <p key={i}>{item}</p>);
  return <>{items}</>;
};
export const AboutTab: React.FC = () => {
  return <div>AboutTab</div>;
};
//useTransition是将某个组件设置为低优先
//传递给startTransition的函数一定是同步的
//被标记为低优先级的组件会被打断
//transition不能控制文本框的输入
