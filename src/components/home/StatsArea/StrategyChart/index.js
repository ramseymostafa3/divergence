import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { nodeModuleNameResolver } from "typescript";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      align: "end",
      labels: {
        color: "rgb(255,255,255)",
        boxWidth: 10,
        boxHeight: 6,
      },
    },
    title: {
      display: true,
      text: "STRATEGY PERFORMANCE",
      align: "start",
      color: "#fff",
      padding: {
        bottom: -15,
      },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'PROFIT',
        color: "#fff"
      },
      type: 'linear',
      display: true,
      position: 'left',
      labelString: 'probability'
    },
    y1: {
      title: {
        display: true,
        text: 'RETURN',
        color: "#fff"
      },
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const responsiveOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      align: "center",
      labels: {
        color: "rgb(255,255,255)",
        boxWidth: 10,
        boxHeight: 6,
      },
    },
    title: {
      display: false,
      text: "STRATEGY PERFORMANCE",
      align: "start",
      color: "#fff",
      padding: {
        bottom: -15,
      },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'PROFIT',
        color: "#fff"
      },
      type: 'linear',
      display: true,
      position: 'left',
      labelString: 'probability'
    },
    y1: {
      title: {
        display: true,
        text: 'RETURN',
        color: "#fff"
      },
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#f76400",
      fillColor: "#f76400",
      backgroundColor: "#f76400",
    },
    {
      label: "Cumulative Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#6f51ff",
      fillColor: "#6f51ff",
      backgroundColor: "#6f51ff",
    },
    {
      label: "Return %",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#e39f1b",
      fillColor: "#e39f1b",
      backgroundColor: "#e39f1b",
    },
    {
      label: "Cumulative Return %",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#ff0000",
      fillColor: "#ff0000",
      backgroundColor: "#ff0000",
    },
  ],
};
function StrategyChart() {

  const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    const checkWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWinWidth(newWidth);
      console.log(winWidth)
    }
    window.addEventListener("load", checkWindowWidth);
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.addEventListener("load", checkWindowWidth);
      window.removeEventListener("resize", checkWindowWidth)
    }
  }, [])
  return (
    <div className="strategy-chart">
      {winWidth > 992 ? (<Line options={options} data={data} />) : (<div className="strategy-chart-responsive"><h6>STRATEGY PERFORMANCE</h6><ul><li><span class="orange"></span>Profit</li><li><span class="blue"></span>Cumulative Profit</li><li><span class="yellow"></span>Return %</li><li><span class="red"></span>Cumulative Return %</li></ul><Line options={responsiveOptions} data={data} /></div>)}
    </div>
  );
}

export default StrategyChart;
