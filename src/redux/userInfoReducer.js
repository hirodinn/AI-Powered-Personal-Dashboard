const initialValue = JSON.parse(localStorage.getItem("userInfo")) || {
  darkMode: false,
};
export default function UserInfoReducer(state = initialValue, action) {
  if (action.type === "ADD" || action.type === "THEME") {
    const temp = { ...state, ...action.payload };
    localStorage.setItem("userInfo", JSON.stringify(temp));
    return temp;
  } else if (action.type === "RESET") {
    return { darkMode: state.darkMode };
  } else {
    return state;
  }
}
