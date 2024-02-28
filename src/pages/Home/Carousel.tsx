import React from "react";
import article from "./css/article.module.less";
export default function Carousel() {
  return (
    <div style={{ overflow: "hidden" }}>
      <ul className={article.box}>
        <li>
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span
                className={`
                  ${article.iconfont}
                  ${article.iconTime}
                  `}
              ></span>
              <span> 2024-01-05 13:30:42</span>
              <span
                className={article.see}
              ></span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                <h3>2024展望</h3>
              </div>
              <div
                className={article.simpleContent}
              >
                近况
                好久没更新博客了，一方面是来到了长沙之后，人确实变得懒...
              </div>
            </div>
          </div>
        </li>
        <li>2025</li>
      </ul>
    </div>
  );
}
