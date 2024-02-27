import React from "react";
import log from "./css/log.module.less";
import Table from "./Table";
import Article from "./Article";
import {
  Route,
  Routes,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Log(): JSX.Element {
  // const data = [...new Array(5)].map(() => {
  //   return {
  //     title: "ts文件格式",
  //     time: "2024-02-25",
  //     user: "sun",
  //   };
  // });
  const data = Array.from({ length: 10 }).map(
    () => {
      return {
        title: (
          <NavLink to={"/log/1"}>你好</NavLink>
        ),
        time: "2024-02-25",
        user: "sun",
      };
    }
  );
  console.log(data); 
  return (
    <div>
      <div className={log.back}> </div>
      <Table data={data} />
      <Routes>
        <Route
          path="/log/1"
          element={<Article />}
        />
      </Routes>
    </div>
  );
}
