import React from "react";
import log from "./css/log.module.less";
export default function Log(): JSX.Element {
  return (
    <div className={log.box}>
      <div className={log.header}>
        <h1 className={log.title}>2024展望</h1>
        <p>
          <span>sun</span>
          <span>|</span>
          <span>|</span>
        </p>
      </div>
      <div className={log.content}></div>
    </div>
  );
}
