import React from "react";
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(247, 100, 0)",
      fillColor: "rgb(247, 100, 0)",
      backgroundColor: "rgb(255,255,255)",
    },
    {
      label: "Cumulative Profit",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      fillColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(255,255,255)",
    },
    {
      label: "Return %",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(227, 159, 27)",
      fillColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(255,255,255)",
    },
    {
      label: "Cumulative Return %",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 0, 0)",
      fillColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(255,255,255)",
    },
  ],
};

function StrategyChart() {
  return (
    <div className="strategy-chart">
      <Line options={options} data={data} />
    </div>
  );
}

export default StrategyChart;
