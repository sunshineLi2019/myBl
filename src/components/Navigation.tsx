import React, {
  useEffect,
  useState,
} from "react";
import home from "./css/navigation.module.less";
import { NavLink } from "react-router-dom";
export default function Navigation(): JSX.Element {
  const [beforeScrollTop, setBeforeScrollTop] =
    useState(window.scrollY);
  useEffect(() => {
    function scrollHandle(): void {
      const afterScrollTop: number =
        window.scrollY;
      const nav = document.getElementsByClassName(
        home.nav
      );
      if (afterScrollTop > beforeScrollTop) {
        (nav[0] as HTMLElement).style.marginTop =
          "-200px";
      } else {
        (nav[0] as HTMLElement).style.marginTop =
          "20px";
      }
      setBeforeScrollTop(afterScrollTop);
    }
    window.addEventListener(
      "scroll",
      scrollHandle
    );
    return () => {
      window.removeEventListener(
        "scroll",
        scrollHandle
      );
    };
  }, [beforeScrollTop]);

  return (
    <>
      <nav className={home.nav}>
        <div
          className={home.img}
          onClick={(e) => {
            (
              e.target as HTMLElement
            ).classList.toggle(home.img);
            (
              e.target as HTMLElement
            ).classList.toggle(home.imgClick);
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
    </>
  );
}
