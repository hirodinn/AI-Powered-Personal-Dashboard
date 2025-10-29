import "./App.css";
import { useSelector } from "react-redux";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";
function App() {
  const userInfo = useSelector((state) => state.userInfo);
  return <>{Object.entries(userInfo).length < 3 ? <Login /> : <Home />}</>;
}

export default App;
