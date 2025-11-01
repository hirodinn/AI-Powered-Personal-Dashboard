import { useDispatch } from "react-redux";
import { reset } from "./redux/userInfoAction";
import "./ResetButton.css";
export function ResetButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(reset());
      }}
      className="reset-button"
    >
      Reset Credentials
    </button>
  );
}
