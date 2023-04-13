import React, { useEffect, useState } from "react";
import ChartCard from "../CommonComponents/ChartCard/ChartCard";
import Header from "../CommonComponents/Header/Header";
import Histogram from "../CommonComponents/Histogram/Histogram";
import LineCharts from "../CommonComponents/LineChart/LineCharts";
import LineChart from "../CommonComponents/LineChart/LineCharts";
import PieC from "../CommonComponents/Pie/PieC";
import Sidenav from "../CommonComponents/Sidenav/Sidenav";
import Welcome from "../CommonComponents/Welcome/Welcome";
import axios from "axios";
import "./dashboard.css";

function Dashboard() {
  const [data, setData] = useState([{}]);
  const arr = [1, 2, 3];
  const getProductList = async () => {
    const resp = await axios.post("http://localhost:8080/getproducts");

    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    var newarr = [];
    arr.map((elem) => {
      newarr.push({ name: elem.Category, value: elem.Quantity });
    });
    console.log(newarr);
    var reduced = newarr.reduce((acc, curr) => {
      if (acc[curr.name]) {
        acc[curr.name] = acc[curr.name] + curr.value;
      } else {
        acc[curr.name] = curr.value;
      }
      return acc;
    }, {});
    console.log(reduced);
    let finalArr = [];
    for (let key in reduced) {
      finalArr.push({ name: key, value: reduced[key] });
    }

    setData(finalArr);
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="dashboard-container">
      {data && (
        <>
          {" "}
          <div className="welcome-info">
            <Welcome />
            <ChartCard />
          </div>
          <div className="line-charts">
            {arr.map((elem) => {
              <LineCharts elem={elem} />;
            })}
          </div>
          <div className="more-charts">
            <Histogram />
            <PieC />
          </div>
        </>
      )}
    </div>
  );
}
export default Dashboard;
