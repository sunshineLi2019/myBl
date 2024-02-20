import React from "react";
import home from "./css/navigation.module.less";
import { NavLink } from "react-router-dom";
export default function Navigation(): JSX.Element {
  return (
    <>
      <div className={home.navBox}>
        <nav className={home.nav}>
          <div
            className={home.img}
            onClick={(e) => {
              (e.target as HTMLElement).classList.toggle(home.img);
              (e.target as HTMLElement).classList.toggle(home.imgClick);
            }}
          ></div>
          <ul>
            <li>
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <NavLink to="/log">日志</NavLink>
            </li>
            <li>
              <NavLink to="/project">项目</NavLink>
            </li>
            <li>
              <NavLink to="/game">游戏</NavLink>
            </li>
            <li>
              <NavLink to="/message">留言</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
