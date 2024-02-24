import React from "react";
import log from "./css/log.module.less";
import Table from "./Table";
export default function Log(): JSX.Element {
  return (
    <div>
      <div className={log.back}> </div>
      <Table />
    </div>
  );
}
