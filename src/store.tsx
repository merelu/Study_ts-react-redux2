import { createStore } from "redux";
//typescript에서 createStore의 reducer를 작성할때 any 사용
//dispatch된 객체의 요소에 접근할때 action.xxx
function test(state: any, action: any) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { number: state.number + action.size };
  }
  return state;
}
export default createStore(
  test,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// redux devtool 사용할때 사용 js에서는 window ts에서는 window as any
// store의 state들 추적할수있음
