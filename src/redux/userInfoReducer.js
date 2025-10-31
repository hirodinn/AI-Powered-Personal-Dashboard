const initialValue = JSON.parse(localStorage.getItem("userInfo")) || {
  darkMode: false,
  todo: JSON.parse(localStorage.getItem("todo-list")) || [],
};
export default function UserInfoReducer(state = initialValue, action) {
  if (action.type === "ADD" || action.type === "THEME") {
    const temp = { ...state, ...action.payload };
    localStorage.setItem("userInfo", JSON.stringify(temp));
    return temp;
  } else if (action.type === "RESET") {
    return { darkMode: state.darkMode };
  } else if (action.type === "SETTODO") {
    localStorage.setItem("todo-list", JSON.stringify(state.todo));
    return { ...state, ...action.payload };
  } else {
    return state;
  }
}
