import React from "react";

import log from "./css/log.module.less";
interface data {
  title: string | JSX.Element;
  time: string;
  user: string;
}

export interface TableProps {
  data: Array<data>;
}
function Table(props: TableProps): JSX.Element {
  const { data } = props;
  return (
    <div className={log.table}>
      <table cellSpacing={"10px"}>
        <tbody>
          {data.map((e, index) => {
            return (
              <tr
                className={
                  index % 2 ? log.row1 : log.row2
                }
              >
                <td className={log.c1}>
                  {index}
                </td>
                <td className={log.c2}>
                  {e.title}
                </td>
                <td className={log.c3}>
                  {e.user}
                </td>
                <td className={log.c4}>
                  {e.time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
