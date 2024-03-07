import React, { useState } from "react";
import "bytemd/dist/index.css";
import { Editor } from "@bytemd/react";
import zhHans from "bytemd/lib/locales/zh_Hans.json";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import "juejin-markdown-themes/dist/juejin.min.css";
import "./css/admin.module.less";
const plugins = [
  gfm({
    locale: {
      strike: "删除线",
      strikeText: "文本",
      table: "表格",
      tableHeading: "标题",
      task: "任务列表",
      taskText: "待办事项",
    },
  }),
  gemoji(),
  highlight(),
  mediumZoom(),
];
export default function Admin() {
  const [value, setValue] = useState("");
  return (
    <div style={{}}>
      <Editor
        plugins={plugins}
        locale={zhHans}
        value={value}
        onChange={(v) => {
          console.log(v);

          setValue(v);
        }}
        // uploadImages={() => {}}
      />
    </div>
  );
}
