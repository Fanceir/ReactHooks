# useEffect

函数的副作用是除了返回值之外对外界环境造成影响的其他影响，这些操作与组件渲染没有关系

```tsx
useEffect(() => {
  console.log("useEffect");
}, []);
```
