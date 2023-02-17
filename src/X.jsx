import React, { useState } from "react";
// import "./App.css";

// import "./App.css";

const Graph = () => {
  const [xAxisData, setXAxisData] = useState([0, 1, 2, 3, 4, 5]);
  const [yAxisData, setYAxisData] = useState([0, 2, 4, 1, 5, 3]);

  const handleXAxisDataChange = (event) => {
    setXAxisData(event.target.value.split(",").map(Number));
  };

  const handleYAxisDataChange = (event) => {
    setYAxisData(event.target.value.split(",").map(Number));
  };

  const maxX = Math.max(...xAxisData);
  const maxY = Math.max(...yAxisData);
  const scaleX = 700 / maxX;
  const scaleY = 700 / maxY;

  const points = xAxisData.map((x, index) => `${x * scaleX + 100},${700 - yAxisData[index] * scaleY}`).join(" ");

  return (
    <div className="App">
      <h1>Graph Plotting</h1>
      <form className="data-form">
        <div>
          <label htmlFor="x-axis-data">X-Axis Data:</label>
          <input
            type="text"
            id="x-axis-data"
            value={xAxisData}
            onChange={handleXAxisDataChange}
          />
        </div><br/>
        <div>
          <label htmlFor="y-axis-data">Y-Axis Data:</label>
          <input
            type="text"
            id="y-axis-data"
            value={yAxisData}
            onChange={handleYAxisDataChange}
          />
        </div>
      </form>
      <svg width="800" height="800">
        <line x1={100} y1={0} x2={100} y2={800} stroke="#000" stroke-width="2" />
        <line x1={0} y1={700} x2={800} y2={700} stroke="#000" stroke-width="2" />
        {xAxisData.map((x, index) => (
          <text key={x} x={x * scaleX + 100} y={725} font-size="20">
            {x}
          </text>
        ))}
        {yAxisData.map((y, index) => (
          <text key={y} x={75} y={700 - y * scaleY} font-size="20">
            {y}
          </text>
        ))}
        <polyline points={points} fill="none" stroke="#000" stroke-width="2" />
      </svg>
    </div>
  );
};

export default Graph;

