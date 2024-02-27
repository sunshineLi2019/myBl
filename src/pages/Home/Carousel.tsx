import React from "react";
import article from "./css/article.module.less";
export default function Carousel() {
  return (
    <div style={{ overflow: "hidden" }}>
      <ul className={article.box}>
        <li>2024</li>
        <li>2025</li>
      </ul>
    </div>
  );
}
