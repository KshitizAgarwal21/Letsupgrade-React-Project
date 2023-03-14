import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  if (localStorage.getItem("token") != null) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
