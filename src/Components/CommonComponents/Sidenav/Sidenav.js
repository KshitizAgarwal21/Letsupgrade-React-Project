import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
export default function Sidenav() {
  return (
    <div>
      <div className="sidenav-container">
        <ul>
          <Link to="/">
            <li>Dashboard</li>
          </Link>
          <Link to="/account">
            <li>Account</li>
          </Link>
          <Link to="/products">
            <li>Product List</li>
          </Link>
          <Link to="/add">
            <li>Add Product </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
