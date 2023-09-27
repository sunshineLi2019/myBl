import React from "react";
import home from "./css/home.module.less";
export default function Carousel() {
  return (
    <>
      <div className={home.carBox}>
        <div className={home.car}>
          <div className={home.carIn}>
            <img src="/src/assets/轮播图背景.jpg" />
            <div className={home.text}>
              <h1>这是我的第一个blog</h1>
              <h2>认识到自己的不足，希望通过在完善个人博客的过程中提高自我</h2>
            </div>
          </div>
          <div className={home.carIn}>
            <img src="/src/assets/轮播图背景.jpg" />
            <div className={home.text}>
              <h1>每日一言</h1>
              <h2>认识到自己的不足，希望通过在完善个人博客的过程中提高自我</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
