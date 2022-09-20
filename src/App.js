// 应用得跟组件
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login/login";
import Admin from "./views/admin/admin";
export default class App extends Component {
  handlerCick = () => {
    console.log("click is button");
  };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
