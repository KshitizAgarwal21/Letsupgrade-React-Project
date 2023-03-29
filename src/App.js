import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Components/Account/Account";
import AddProduct from "./Components/Add Product/AddProduct";
import Header from "./Components/CommonComponents/Header/Header";
import Histogram from "./Components/CommonComponents/Histogram/Histogram";
import Sidenav from "./Components/CommonComponents/Sidenav/Sidenav";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import { searchContext } from "./Context/searchContext";
import Productslist from "./Components/Products List/Productslist";

function App() {
  const [token, setToken] = useState();
  const [search, updateSearch] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <searchContext.Provider
      value={{ searchVariable: search, updateSearchVariable: updateSearch }}
    >
      <BrowserRouter>
        {token == null && <Login state={setToken} />}
        {token != null && (
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
                    <Route index element={<Dashboard />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/products" element={<Productslist />}></Route>
                    <Route path="/add" element={<AddProduct />}></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </searchContext.Provider>
  );
}

export default App;
