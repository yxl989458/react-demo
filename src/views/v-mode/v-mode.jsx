import { useState, memo, useCallback, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

const Child = memo((props) => {
  console.log(11111111111111111111111111111111111111);
  const { id } = useParams();
  const localtion = useLocation();
  console.log(localtion);
  return (
    <>
      <h1>{localtion.state ? localtion.state.name : ""}</h1>
      <h1>id:{id}</h1>
      <div>子组件</div>
      <button onClick={() => props.setVal()}>子组件累加</button>
    </>
  );
});

export default function App() {
  const [val, setVal] = useState(11);
  // const set_1=useCallback(()=>setVal(val=>val+1),[])
  //函数中返回函数 被称为高阶函数
  const set_1 = useMemo(() => {
    return () => setVal((val) => val + 1);
  }, []);

  return (
    <div>
      <h2>{val}</h2>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button onClick={() => setVal(val + 1)}>累加</button>
      <hr />
      <Child setVal={set_1} />
    </div>
  );
}
