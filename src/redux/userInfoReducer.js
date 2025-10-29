import { act } from "react";

const initialValue = JSON.parse(localStorage.getItem("userInfo")) || {};
export default function UserInfoReducer(state = initialValue, action) {
  if (action.type === "ADD") {
    const temp = { ...state, ...act.payload };
    return temp;
  } else {
    return state;
  }
}
