//子组件

import { Button } from "antd";
import { createContext, useContext, useState } from "react";

// 创建上下文空间(provider ：提供器,Consumer ：消费者)
const NumConText = createContext();

function Son(props) {
  const { num, setNum } = useContext(NumConText);
  return (
    <div>
      {/* son--{props.num} */}
      {/* <button onClick={() => props.setNum(789)}>修改num</button> */}
      <h2>{num}</h2>
      <Button type="danger" onClick={() => setNum(num + 2)}>
        修改num
      </Button>
    </div>
  );
}

//父组件
function Person(props) {
  console.log(props);
  // return <Son num={props.num} setNum={props.setNum} />
  return <Son />;
}
//  顶级组件
function App() {
  const [num, setNum] = useState(123);
  //提供子组件用来修改num 的函数}
  // return <Person num={num} setNum={setNum} />
  return (
    <NumConText.Provider value={{ num, setNum }}>
      <Person value={num} />
    </NumConText.Provider>
  );
}
export default App;
