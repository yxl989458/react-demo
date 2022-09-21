import React from "react";
import { connect } from "react-redux";
const redux = function Redux(props) {
  return (
    <>
      <h2>{props.num}</h2>
      <button onClick={() => props.leijia()}>累加</button>
    </>
  );
};
//状态映射：将reducer中的state映射成props,让开发者可以在组件中使用props.num去调用state中的num
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};
//时间派发映射 将reducer中的事件映射成props,让开发者可以在组件中使用props.leijia()去实现num的累加
const mapDispathToProps = (dispatch) => {
  return {
    leijia() {
      const action = { type: "addnum", value: 2 };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(redux);
