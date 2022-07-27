import React, { Component } from "react";
import Chart from "react-apexcharts";

const state = {
  series: ['84.59', '72.03', '60.81', '49.33', '37.28', '26.07'],
  options: {
    plotOptions: {
      radialBar: {
        offsetY: 0,
        offsetX: 70,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 0,
          size: '10%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#e54c3b', '#f69305', '#f4b51a', '#c0c834', '#7ab140', '#009485'],
    labels: ['XAUUSD', 'GBPUSD', 'GBPJPY', 'EURUSD', 'EUDCHF', 'AUDCAD'],
    legend: {
      show: true,
      floating: true,
      fontSize: '10px',
      position: 'left',
      offsetX: -10,
      offsetY: 20,
      labels: {
        colors: '#fff',
      },
      markers: {
        width: 7,
        height: 7,
        radius: 7,
        size: 0,
        strokeWidth: 0,
        margin: 0,
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + '%';
      },
      itemMargin: {
        vertical: 0
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
            show: false
        }
      }
    }]
  }
};

function SummaryPopularity() {
    return (
      <div className="summaryColumn">
        <div className="summaryhead">
          <h3>Curruncies popularity for July</h3>
        </div>
        <div className="summaryContent">
          <div className="blockDivergent radialDivergent">
            <Chart
              options={state.options}
              series={state.series}
              type="radialBar"
              height={230}
              width={320}
            />
          </div>
        </div>
      </div> 
    );
  }
  
  export default SummaryPopularity;
  