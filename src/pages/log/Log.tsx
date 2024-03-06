import React, { useEffect } from "react";
import log from "./css/log.module.less";
import { useParams } from "react-router-dom";
export default function Log(): JSX.Element {
  const params = useParams();
  // {id: "2",name:"zora"}
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="box">
      <div className={log.header}>
        <h1 className={log.title}>2024展望</h1>
        <p>
          <span>sun</span>
          <span>|</span>
          <span>2024-01-05 13:30:42</span>
          <span>
            <span className="iconfont icon-yanjing"></span>
            <span>145</span>
          </span>
          <span>
            <span className="iconfont icon-good"></span>
            <span>145</span>
          </span>
        </p>
      </div>
      <div>
        <div className={log.content}>
          <h2>近况</h2>
          <p>
            好久没更新博客了，一方面是来到了长沙之后，人确实变得懒散了，
            <br />
            另一方面，来新公司的学习压力也变大了，不过这段时间加班很少，感觉自己长胖了。
          </p>
          <h2>2024学习计划</h2>
          <p>
            学习java。虽然我的博客使用springboot作为后端搭建的，但是说实话，这后端挺水的:)，2024年度争取往后段整点新活
          </p>
          <p>
            学习three.js。也不知道我哪儿来的兴趣，2023下半年突然学习起了three.js，当然了，大概整了1个多月，就被three.js指数增长的学习难度劝退了，今年我感觉可以重新学习起来，说不定今年在我的博客里面就多了一个three.js做的一个页面
          </p>
          <p>
            学习可视化。使用antV生态去学习可视化的解决方案，这一块主要是工作中会涉及到，平时工作之余也看了一些g2，x6等图表的案例，今年就具体学习一下
          </p>
          <p>
            学习h5。在公司做了半年的b端，感觉今年大概率会接触c端的业务了，到时候一边做业务，一边学习吧。
          </p>
          <h2>2024生活计划</h2>
          <p>
            健身。大学的时候曾经练过一段时间，但是上班之后，日渐圆润起来了（肌肉），当然我不打算花钱去健身房练练，最多买个哑铃，做做俯卧撑，仰卧起坐之类的。
          </p>
          <p>
            玩游戏。玩游戏还是工作之余解压的好方法了，今年还是像以往一样，下班玩玩游戏好了
          </p>
          <h2>结尾</h2>
          <p>没啥说的，2024加油吧！</p>
        </div>
      </div>
    </div>
  );
}
