import React from "react";
import ChartCard from "../CommonComponents/ChartCard/ChartCard";
import Header from "../CommonComponents/Header/Header";
import LineCharts from "../CommonComponents/LineChart/LineCharts";
import LineChart from "../CommonComponents/LineChart/LineCharts";
import Sidenav from "../CommonComponents/Sidenav/Sidenav";
import Welcome from "../CommonComponents/Welcome/Welcome";
import "./dashboard.css";
export default function Dashboard() {
  const arr = [1, 2, 3];
  return (
    <div>
      <div className="dashboard-container">
        <Sidenav />

        <div className="dashboard-content-container">
          <Header />
          <div className="welcome-info">
            <Welcome />
            <ChartCard />
          </div>
          <div className="line-charts">
            {arr.map((elem) => (
              <LineCharts elem={elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
