import React, { ReactElement } from "react";
import log from "./css/log.module.less";
function Table(props: { data: [{ row: string }] }): ReactElement {
  const { data } = props;
  return (
    <div className={log.table}>
      <table cellSpacing={"10px"}>
        <tbody>
          <tr className={log.row1}>
            <td className={log.c1}>1</td>
            <td className={log.c2}>2</td>
            <td className={log.c3}>3</td>
            <td className={log.c4}>4</td>
          </tr>
          <tr className={log.row2}>
            <td className={log.c1}>1</td>
            <td className={log.c2}>2</td>
            <td className={log.c3}>3</td>
            <td className={log.c4}>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
