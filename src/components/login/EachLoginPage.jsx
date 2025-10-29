import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../../redux/userInfoAction";
export default function EachLoginPage({ info, index, setCurrent }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setCurrent(index + 1);
      const obj = { [info.type]: inputValue };
      dispatch(add(obj));
    }
  }
  return (
    <div className="each-login-page">
      <h1>{info.description.slice(11)}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={info.description}
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
