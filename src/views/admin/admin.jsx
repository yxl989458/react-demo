import "./admin.css";
import { Button } from "antd";
import { Outlet, Link, useNavigate } from "react-router-dom";
//登录的路由组件
const use_list = ["张三", "李四", "王五"];
const Admin = (props) => {
  let localtion = useNavigate();
  console.log(localtion);
  const btnLick = (num) => {
    console.log(num);
  };
  const navigateVmode = () => {
    localtion("/Vmode", {
      state: {
        name: "zs",
      },
    });
  };
  return (
    <div
      className="admin_container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <div className="img" style={{ color: "red" }}>
        <img
          src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
      </div>
      <ul>
        {use_list.map((e, index) => (
          <li style={{ color: "skyblue" }} key={index}>
            {e}
          </li>
        ))}
      </ul>
      <Button type="primary">按钮er</Button>
      <Button type="primary">按钮three</Button>
      <Button type="danger">按钮fouter</Button>
      <Button type="danger" onClick={navigateVmode}>
        跳到vmode
      </Button>
      <Button type="danger" onClick={btnLick.bind(this, 1)}>
        按钮five
      </Button>
      <Button type="danger" onClick={btnLick.bind(this, 2)}>
        按钮five
      </Button>
      <div>
        <ul>
          <h1>路由切换</h1>
          <li>
            <Link to="/Redux">redux</Link>
          </li>
          <li>
            <Link to="/Test?id=123&name='zs'">test</Link>
          </li>
          <li>
            <Link to="/Vmode">vMode</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
