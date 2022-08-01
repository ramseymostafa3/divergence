import React, {useState} from "react";
import Chart from "react-apexcharts";

const state = {
    series: [{
        name: 'Cluster 1',
        data: [0.1, 0.3, 0.5, 0.7, 0.4],
      }, {
        name: 'Cluster 2',
        data: [0.0, 0.1, 0.2, 0.3, 0.4],
      }, {
        name: 'Cluster 3',
        data: [0.2, 0.4, 0.6, 0.8, 0.0],
      }, {
        name: 'Cluster 4',
        data: [0.8, 0.6, 0.4, 0.2, 0.1],
      }, {
        name: 'Cluster 5',
        data: [0.0, 0.5, 0.2, 0.3, 0.7],
      }, {
        name: 'Cluster 6',
        data: [0.2, 0.4, 0.1, 0.7, 0.0],
      }, {
        name: 'Cluster 7',
        data: [0.8, 0.5, 0.1, 0.4, 0.2],
      }, {
        name: 'Cluster 8',
        data: [0.7, 0.6, 0.5, 0.4, 0.3],
      }],
      options: {
        // colors: ['#1e79b5', '#fe7a08', '#30a12c', '#9566bf ', '#ff0000', '#808080', '#8b8903', '#de87c3'],
        // dataLabels: {
        //   enabled: false
        // },
        chart: {
          height: 200,
          type: 'radar',
          offsetY: 20,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.25
        },
        xaxis: {
            //type: 'days',
            categories: ["0", "5", "10", "15", "20"],
            // labels: {
            //     formatter: function (val) {
            //         return val + "D"
            //     },
            //     style: {
            //         colors: '#a1a1a1'
            //     }
            // },
            // title: {
            //     text: 'Days',
            //     show: false,
            //     style: {
            //         color: '#a1a1a1',
            //         fontSize: '12px',
            //         fontFamily: 'Roboto',
            //         fontWeight: 400,
            //         cssClass: 'apexcharts-xaxis-title',
            //     },
            // },
        },
        // yaxis: {
        //     categories: ["0.0", "0.2", "0.4", "0.6", "0.8"],   
        //     labels: {
        //         show: true,
        //         align: 'right',
        //         style: {
        //             colors: ['#a1a1a1']
        //         }
        //     },
        //     title: {
        //         text: 'Volatility',
        //         rotate: -90,
        //         offsetX: 0,
        //         offsetY: 0,
        //         style: {
        //             color: '#f15200',
        //             fontSize: '12px',
        //             fontFamily: 'Roboto',
        //             fontWeight: 400,
        //             cssClass: 'apexcharts-yaxis-title',
        //         },
        //     },
        // },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            //offsetX: 0,
            offsetY: -20,
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

function TradeVolatility() {
    return (
        <div className="blockDivergent radialDivergent mt-2">
            <h6 className="chart-title-yaxis">Volatility</h6>
            <Chart options={state.options} series={state.series} type="radar" width={480} />
        </div>
    );
}

export default TradeVolatility;