import React, {useState} from "react";
import Chart from "react-apexcharts";

const state = {
    series: [{
        name: 'Volatility',
        data: [90, 102, 28, 51, 42, 109, 100]
    }, {
        name: 'Return',
        data: [11, 32, 90, 32, 34, 82, 41]
    }],
    options: {
        colors: ['#ff0000', '#00e396'],
        dataLabels: {
          enabled: false
        },
        chart: {
            type: 'area',
            stacked: true,
            toolbar: {
              show: false
            }
        },
        grid: {
            show: true,
            borderColor: '#483a31',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.5
            },  
            column: {
                colors: undefined,
                opacity: 0.5
            },  
            // padding: {
            //     top: 0,
            //     right: 0,
            //     bottom: 0,
            //     left: 0
            // },  
        },        
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'days',
          categories: ["0", "5", "10", "15", "20", "25", "30"],
          labels: {
                // formatter: function (val) {
                //     return val + "D"
                // },
                style: {
                    colors: '#a1a1a1'
                }
            },
            title: {
                text: 'Days',
                show: false,
                style: {
                    color: '#a1a1a1',
                    fontSize: '12px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-title',
                },
            },
        },
        yaxis: {
            type: 'percentage',
            categories: ["-100", "-50", "-25", "0", "25", "50", "100"],
            
            labels: {
                show: true,
                align: 'right',
                formatter: function (val) {
                    return val + "%"
                },
                style: {
                    colors: ['#a1a1a1']
                }
            },
            title: {
                text: '% Return',
                rotate: -90,
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: '#f15200',
                    fontSize: '12px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
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
              width: 20,
              height: 6,
              radius: 6,
            }
        }
    }, 
};

function TradeReturn() {
    return (
        <div className="blockDivergent radialDivergent">
            <Chart options={state.options} series={state.series} type="area" height={240} width={460} />
        </div>
    );
}

export default TradeReturn;