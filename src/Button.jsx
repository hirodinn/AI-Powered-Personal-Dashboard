import { useDispatch, useSelector } from "react-redux";
import { makeDark } from "./redux/userInfoAction";
import "./Button.css";
export function Button() {
  const darkMode = useSelector((state) => state.userInfo.darkMode);
  const dispatch = useDispatch();
  return (
    <div
      className={`slider-Container ${darkMode && "change-color"}`}
      onClick={() => {
        dispatch(makeDark({ darkMode: !darkMode }));
        console.log(darkMode);
      }}
    >
      <div class="slide"></div>
    </div>
  );
}
