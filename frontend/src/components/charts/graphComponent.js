import React, { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const GraphComponent = ({ title, data }) => {
  const [chartType, setChartType] = useState("bar");
  const [chartSize, setChartSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.6 });
  const [selectedYear, setSelectedYear] = useState(Object.keys(data)[0]);
  const [selectedHouse, setSelectedHouse] = useState(Object.keys(data[selectedYear])[0]);

  useEffect(() => {
    const handleResize = () => {
      setChartSize({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.6 });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const months = Object.keys(data[selectedYear][selectedHouse]);
  const datasets = Object.keys(data[selectedYear][selectedHouse][months[0]]).map((key) => ({
    label: key,
    data: months.map((month) => data[selectedYear][selectedHouse][month][key]),
    backgroundColor: key === "bal" ? "#3b82f6" : key === "exp" ? "#ef4444" : "#22c55e",
    borderColor: key === "bal" ? "#1e40af" : key === "exp" ? "#b91c1c" : "#15803d",
    borderWidth: 1,
  }));

  const chartData = { labels: months, datasets };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-center w-full">
      {/* Year & House Selection */}
      <div className="flex justify-center space-x-4 mb-4">
        <select className="px-3 py-1 bg-gray-200 border border-gray-400 rounded" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {Object.keys(data).map((year) => <option key={year} value={year}>{year}</option>)}
        </select>

        <select className="px-3 py-1 bg-gray-200 border border-gray-400 rounded" value={selectedHouse} onChange={(e) => setSelectedHouse(e.target.value)}>
          {Object.keys(data[selectedYear]).map((house) => <option key={house} value={house}>{house}</option>)}
        </select>
      </div>

      {/* Chart Type Selection */}
      <div className="flex justify-center mb-4">
        <button onClick={() => setChartType("bar")} className="px-3 py-1 mx-1 bg-blue-500 text-white rounded">Bar</button>
        <button onClick={() => setChartType("line")} className="px-3 py-1 mx-1 bg-green-500 text-white rounded">Line</button>
      </div>

      {/* Display Chart */}
      <div className="flex justify-center items-center w-full">
        {chartType === "bar" && <Bar data={chartData} width={chartSize.width} height={chartSize.height} />}
        {chartType === "line" && <Line data={chartData} width={chartSize.width} height={chartSize.height} />}
      </div>
    </div>
  );
};

export default GraphComponent;