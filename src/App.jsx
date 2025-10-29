import "./App.css";
import { useSelector } from "react-redux";
import { Login } from "./components/login/Login";
function App() {
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  return (
    <>
      {Object.entries(userInfo).length === 0 ? <Login /> : <h1>logged in</h1>}
    </>
  );
}

export default App;
