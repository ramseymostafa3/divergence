import React, { Component } from "react";
import Chart from "react-apexcharts";

const state = {
  series: [{
    name: 'Long',
    data: [100, 60, 20, 10, 10, 75],
    
  }, {
    name: 'Short',
    data: [0, 0, 20, 30, 40, 0]
  }],
  
  options: {
    colors: ['#00e396', '#ff0000'],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 0,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['XAUUSD', 'GBPUSD', 'GBPJPY', 'EURUSD', 'EUDCHF', 'AUDCAD'],
      labels: {
        formatter: function (val) {
          return val + "D"
        },
        style: {
          colors: ['#a1a1a1']
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
      labels: {
        style: {
          colors: ['#fff']
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: 0,
      offsetY: 20,
      fontSize: '10px',
      fontWeight: 400,
      labels: {
        colors: ['#fff'],
      },
      markers: {
        width: 6,
        height: 6,
        radius: 6,
      }
    }
  },
};

function SummaryHoldingTime() {
  return (
    <div className="summaryColumn">
      <div className="summaryhead">
        <h3>Average Holding Time for July</h3>
      </div>
      <div className="summaryContent">
        <div className="blockDivergent radialDivergent">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height={193}
            width={320}
          />
        </div>
      </div>
    </div> 
  )
}

export default SummaryHoldingTime;
  