import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { add } from "../../redux/userInfoAction";
export default function EachLoginPage({
  info,
  index,
  setCurrent,
  current,
  setCurrentInput,
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setCurrent(index + 1);
      const obj = { [info.type]: inputValue };
      dispatch(add(obj));
    }
  }
  useEffect(() => {
    if (current === index) setCurrentInput(inputRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
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
          ref={inputRef}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
