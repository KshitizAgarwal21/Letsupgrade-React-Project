import React from "react";
import Header from "../CommonComponents/Header/Header";
import Sidenav from "../CommonComponents/Sidenav/Sidenav";
import "./dashboard.css";
export default function Dashboard() {
  return (
    <div>
      <div className="dashboard-container">
        <Sidenav />
        <Header></Header>
      </div>
    </div>
  );
}
