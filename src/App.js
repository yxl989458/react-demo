// 应用得跟组件
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login/login";
import Admin from "./views/admin/admin";
import Test from "./views/test/test";
import Componentsprops from "./views/components_props/components_props";
import Vmode from "./views/v-mode/v-mode";
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
          <Route path="/Test" element={<Test />} />
          <Route path="/components_props" element={<Componentsprops />} />
          <Route path="/Vmode" element={<Vmode />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
