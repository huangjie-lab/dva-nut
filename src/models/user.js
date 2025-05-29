import { NameSpace } from "../constant";
import { queryUser } from "../services/example";

export default {
  namespace: NameSpace.user,
  state: {
    name: {
      first: "匿名",
    },
  },
  effects: {
    // call 执行异步函数
    // put 发出一个 Action，类似于 dispatch
    *fetchUser({ payload }, { call, put }) {
      const res = yield call(queryUser);
      const user = res.data.results[0];
      console.log("res", user); //sy-log
      yield put({ type: "save", payload: user });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state, action) {
      return {
        ...state,
        ...{
          name: {
            ...state.name,
            first: state.name.first + "1",
          },
        },
      };
    },
  },
};
