import { Button } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Test() {
  //hook只能用在函数组件中的最顶层
  // 1.hook
  const [URLSearchParams] = useSearchParams();
  console.log(URLSearchParams.getAll("id"));
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  // 2.useEffect 模拟mounted 一般用于ajax
  // useEffect(()=>{
  //  console.log('挂在完成')
  // })
  // 2.1检测数据更新 检查那个数据就把数据放在数组中
  //当检查得是页面中所有的变量、两个选择、一把数据都放在数组中，二是直接删除数组
  //当不想检测页面中任何数据，直接给一个空数组
  // useEffect(()=>{
  // console.log('num1');
  // },[])
  //3.模拟beforeDestroye
  useEffect(() => {
    return () => {
      console.log("销毁阶段");
    };
  });
  return (
    <>
      <div>{num1}</div>
      <h2>{num2}</h2>
      <Button type="primary" onClick={() => setNum1(num1 + 1)}>
        button
      </Button>
      <Button type="primary" onClick={() => setNum2(num2 + 1)}>
        button
      </Button>
    </>
  );
}
export default Test;
