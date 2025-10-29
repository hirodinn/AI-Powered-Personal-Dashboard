// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { add } from "../../redux/userInfoAction";
export default function EachLoginPage({ info, index, setCurrent }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setCurrent(index + 1);
    }
  }
  return (
    <div className="each-login-page">
      <h1>{info.description.slice(11)}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={info.description} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
