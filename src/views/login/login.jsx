import { Button, Checkbox, Form, Input, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import React from "react";
import "./login.css";

const Login = () => {
  const Navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    Axios.post("http://127.0.0.1:8989/login", values).then((res) => {
      console.log(res);
      if (res.data.success) {
        message.success("登录成功");
        Navigate("/");
      } else {
        message.error("密码或邮箱错误");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login_container">
      <Card title="登录" style={{ width: 500 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="邮箱" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: "password必须由数字、英文、_组成",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
