/*入口文件*/
import App from "./App";
import ReactDom from "react-dom/client";
import React from "react";
import "antd/dist/antd.min.css";
import './css/global.css'

const root = ReactDom.createRoot(document.querySelector("#root"));
// 将app组件标签挂载到index的div上
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// setTimeout(() => {
//   root.render(
//     <React.StrictMode>
//      <div></div>
//     </React.StrictMode>
//   );
// }, 3000);
