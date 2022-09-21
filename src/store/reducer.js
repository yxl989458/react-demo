// 创建初始状态 并导出一个函数

const defaultState = {
  num: 10000,
};

//出一个函数
const returnState = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === "addnum") {
    newState.num += action.value;
    console.log(newState);
  }
  return newState;
};
export default returnState;
