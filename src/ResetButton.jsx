import { useDispatch } from "react-redux";
import { reset } from "./redux/userInfoAction";
export function ResetButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(reset());
      }}
      style={{ position: "absolute", top: "10px", right: "10px" }}
    >
      Reset Credentials
    </button>
  );
}
