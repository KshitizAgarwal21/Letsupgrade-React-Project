import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../ChartCard/chartcard.css";
const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 2400,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 0,
    pv: 1398,
    amt: 0,
  },
  {
    name: "Page C",
    uv: 0,
    pv: 9800,
    amt: 0,
  },
  {
    name: "Page D",
    uv: 0,
    pv: 3908,
    amt: 0,
  },
  {
    name: "Page E",
    uv: 0,
    pv: 4800,
    amt: 0,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 0,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 0,
  },
];

export default function LineCharts(props) {
  useEffect(() => {
    console.log(props);
  });

  return (
    <div>
      <div className="chart-container">
        {props.elem}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
