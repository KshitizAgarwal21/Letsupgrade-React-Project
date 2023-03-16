import React from "react";
import ChartCard from "../CommonComponents/ChartCard/ChartCard";
import Header from "../CommonComponents/Header/Header";
import Histogram from "../CommonComponents/Histogram/Histogram";
import LineCharts from "../CommonComponents/LineChart/LineCharts";
import LineChart from "../CommonComponents/LineChart/LineCharts";
import PieC from "../CommonComponents/Pie/PieC";
import Sidenav from "../CommonComponents/Sidenav/Sidenav";
import Welcome from "../CommonComponents/Welcome/Welcome";
import "./dashboard.css";
function Dashboard() {
  const arr = [1, 2, 3];
  return (
    <div className="dashboard-container">
      <div className="welcome-info">
        <Welcome />
        <ChartCard />
      </div>
      <div className="line-charts">
        {arr.map((elem) => (
          <LineCharts elem={elem} />
        ))}
      </div>
      <div className="more-charts">
        <Histogram />
        <PieC />
      </div>
    </div>
  );
}
export default Dashboard;
