export function add(obj) {
  return {
    type: "ADD",
    payload: obj,
  };
}
export function makeDark(val) {
  return {
    type: "THEME",
    payload: val,
  };
}
export function reset() {
  return {
    type: "RESET",
  };
}
export function setTodo(obj) {
  return {
    type: "SETTODO",
    payload: obj,
  };
}
