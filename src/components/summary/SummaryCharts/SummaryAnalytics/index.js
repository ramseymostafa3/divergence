import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    layout: {
      padding: 24,
    },
    plugins: {
        datalabels: {
            display: true,
            color: "white",
            title: {
                font: {
                  weight: 'normal',
                  size: 2,
                }
              },
            clamp: true,
            //formatter: Math.round,
            formatter: function (value) {
                return Math.round(value) + '%';
            },
            anchor: "end",
            offset: -20,
            align: "start"
          },
        title: {
            display: false,
            //text: 'Monthly Analytics Summary',
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    var label = context.dataset.label || '';
                    if (context.parsed.y !== null) {
                        label += ' ' +context.parsed.y + '%';
                    }
                    return label;
                }
            }
        },
        legend: {
            display: false
        },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
            display: false,
            drawBorder: false
        },
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  export const data1 = {
    labels,
    datasets: [
      {
        data: [-1.98, -0.73, 0.56, -2.2, 1.74, 2.97, 3.75, -2.6, -3.1, -0.98, -3.94, 3.0],
        //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })) 
        backgroundColor: ['#009587', '#7bb342', '#c0c933', '#f7b618', '#f89306', '#e74b3b', '#00e396', '#009587', '#7bb342', '#c0c933', '#f7b618', '#e74b3b'],
      },

    ],
  };

  export const data2 = {
    labels,
    datasets: [
      {
        data: [1.98, 0.73, 0.56, 2.2, 1.74, 2.97, 3.75, -2.6, -3.1, -0.98, -3.94, 3.0],
        //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })) 
        backgroundColor: ['#009587', '#7bb342', '#c0c933', '#f7b618', '#f89306', '#e74b3b', '#00e396', '#009587', '#7bb342', '#c0c933', '#f7b618', '#e74b3b'],
      },

    ],
  };

  export const data3 = {
    labels,
    datasets: [
      {
        data: [1.98, 0.73, -0.56, 2.2, -1.74, -2.97, -3.75, 2.6, 3.1, 0.98, 3.94, -3.0],
        //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })) 
        backgroundColor: ['#009587', '#7bb342', '#c0c933', '#f7b618', '#f89306', '#e74b3b', '#00e396', '#009587', '#7bb342', '#c0c933', '#f7b618', '#e74b3b'],
      },

    ],
  };

  export const data4 = {
    labels,
    datasets: [
      {
        data: [-1.98, -0.73, -0.56, -2.2, -1.74, 2.97, -3.75, -2.6, -3.1, -0.98, -3.94, 3.0],
        //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })) 
        backgroundColor: ['#009587', '#7bb342', '#c0c933', '#f7b618', '#f89306', '#e74b3b', '#00e396', '#009587', '#7bb342', '#c0c933', '#f7b618', '#e74b3b'],
      },

    ],
  };

function SummaryAnalytics() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="summaryColumn">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className="summaryhead">
                <h3>Monthly Analytics</h3>
                <TabList>
                    <Tab>2019</Tab>
                    <Tab>2020</Tab>
                    <Tab>2021</Tab>
                    <Tab>2022</Tab>
                </TabList>  
            </div>
            <div className="summaryContent">
                <TabPanel>
                    <div className="blockDivergent radialDivergent">
                        <Bar options={options} data={data1} height={165}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="blockDivergent radialDivergent">
                        <Bar options={options} data={data2} height={165}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="blockDivergent radialDivergent">
                        <Bar options={options} data={data3} height={165}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="blockDivergent radialDivergent">
                        <Bar options={options} data={data4} height={165}/>
                    </div>
                </TabPanel>
            </div> 
            </Tabs>
        </div>
    )
  }
  
  export default SummaryAnalytics;
  