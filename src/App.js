import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Components/Account/Account";
import AddProduct from "./Components/Add Product/AddProduct";
import Header from "./Components/CommonComponents/Header/Header";
import Histogram from "./Components/CommonComponents/Histogram/Histogram";
import Sidenav from "./Components/CommonComponents/Sidenav/Sidenav";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Productslist from "./Components/Products List/Productslist";

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
      <BrowserRouter>
        <div>
          <div className="app-container">
            <div className="sidenav-container">
              <Sidenav />
            </div>
            <div className="main-container">
              <div className="header-container">
                <Header />
              </div>
              <div className="content-container">
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/account" element={<Account />}></Route>
                  <Route path="/products" element={<Productslist />}></Route>
                  <Route path="/add" element={<AddProduct />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
