import React, { Component } from "react";
import "./admin.css";
import { Button } from "antd";
//登录的路由组件
const use_list = ["张三", "李四", "王五"];
export default class Admin extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
    this.addNum = this.addNum.bind(this)
  }
  render() {
    return (
      <div
        className="admin_container"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"gray"
        }}
      >
        <h1 style={{ color: "red" }}>
          <img
            src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
        </h1>
        <ul>
          {use_list.map((e, index) => (
            <li style={{ color: "skyblue" }} key={index}>{e}</li>
          ))}
        </ul>
        <h2>数字：{this.state.num}</h2>
        <Button
          type="primary"
          onClick={() => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          按钮一
        </Button>
        <Button type="primary" onClick={this.addNum.bind(this)}>
          按钮er
        </Button>
        <Button type="primary" onClick={() => this.addNum()}>
          按钮three
        </Button>
        <Button type="danger" onClick={() => this.addNum()}>
          按钮fouter
        </Button>
        <Button type="danger" onClick={this.btnLick.bind(this,1)}>
          按钮five
        </Button>
        <Button type="danger" onClick={this.btnLick.bind(this,2)}>
          按钮five
        </Button>
      </div>
    );
  }
  addNum() {
    this.setState({
      num: this.state.num + 1
    })
  }
  btnLick(num){
    console.log(num);
  }
}
