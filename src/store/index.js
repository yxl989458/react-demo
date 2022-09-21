//仓库入口文件
// 引入reducer

import { createStore } from "redux";
import reducer from "./reducer";
console.log(reducer);

const store = createStore(reducer);

export default store;
