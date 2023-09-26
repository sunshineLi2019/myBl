import React from "react";
import home from "./home.module.less";
export default function Navigation(): JSX.Element {
  return (
    <>
      <nav className={home.nav}>
        <div className={home.img}>
          <img src="/src/assets/头像.jpg" />
        </div>
        <ul>
          <li>首页</li>
          <li>日志</li>
          <li>项目</li>
          <li>游戏</li>
          <li>留言</li>
        </ul>
      </nav>
    </>
  );
}
