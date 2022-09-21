/*入口文件*/
import App from "./App";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import "antd/dist/antd.min.css";
import "./css/global.css";
import store from "./store/index";

const root = ReactDom.createRoot(document.querySelector("#root"));
// 将app组件标签挂载到index的div上
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
