import React from "react";
import article from "./css/article.module.less";
import { useNavigate } from "react-router-dom";
export default function Carousel() {
  const navigate = useNavigate();
  return (
    <div className={`${article.box} box`}>
      <ul>
        <li
          onClick={() => {
            navigate("/log/121");
          }}
        >
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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
        <li
          onClick={() => {
            navigate("/log/122");
          }}
        >
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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
        <li>
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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
        <li>
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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
        <li>
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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
        <li>
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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
        <li>
          <div className={article.care}>
            <div className={article.target}>
              随笔
            </div>
            <div className={article.header}>
              <span className="time">
                <span className="iconfont icon-time"></span>
                <span>2024-01-05 13:30:42</span>
              </span>
              <span className="see">
                <span className="iconfont icon-yanjing"></span>
                106
              </span>
              <span className="see">
                <span className="iconfont icon-good"></span>
                123
              </span>
              <span className="see">
                <span className="iconfont icon-shoucang"></span>
                123
              </span>
            </div>
            <div className={article.content}>
              <div className={article.title}>
                2024展望
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

        <div className={article.pagenation}>
          <div className={article.page}>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <span>&lt;</span>
          </div>
          <div className={article.black}>
            <button>1</button>
          </div>
          <div>
            <button>2</button>
          </div>
          <div>
            <button>3</button>
          </div>
          <div>
            <span>&gt;</span>
          </div>
        </div>
      </ul>
    </div>
  );
}
