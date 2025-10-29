import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from "./userInfoReducer";

export const store = configureStore({
  reducer: {
    cart: UserInfoReducer,
  },
});
