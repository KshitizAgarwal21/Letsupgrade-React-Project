import React from "react";
import "./header.css";
import bell from "../../../assets/images/new.svg";
export default function Header() {
  return (
    <div>
      <header>
        <input
          type="text"
          className="header-input"
          placeholder="🔍   Search"
        ></input>
        <div className="user-details">
          <img className="notification" src={bell}></img>
          <p>Letsupgrade student</p>
          <div className="dp"></div>
        </div>
      </header>
    </div>
  );
}
