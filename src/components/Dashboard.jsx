import React from "react";
import Card from "./Card";
import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";
import { dataLine, dataBar } from "../assets/ChatData";
import { BarElement, CategoryScale, Chart as ChartJs, LinearScale, LineElement, PointElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJs.register(LineElement,BarElement,CategoryScale,LinearScale, PointElement)


const Dashboard = () => {
  return (
    <div className="grow p-8 text-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Card icon={<FaShoppingCart />} title={"Orders"} value={"140"} />
        <Card icon={<FaBox />} title={"Products"} value={"120"} />
        <Card icon={<FaUsers />} title={"Users"} value={"30"} />
        <Card icon={<FaCog />} title={"Settings"} value={"11"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-slate-900 dark:text-white">
            <h3 className="text-lg font-semibold mb-4">Sales Data</h3>
            <Line data={dataLine}/>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:text-white dark:bg-slate-900">
            <h3 className="text-lg font-semibold mb-4">Products Data</h3>
            <Bar data={dataBar}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
