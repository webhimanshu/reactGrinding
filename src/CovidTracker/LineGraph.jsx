import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import faker from 'faker';
import {Line} from 'react-chartjs-2';
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
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
    
//   ],
// };
 const LineGraph = ({yAxix,xDate}) =>
  {
 const labels = xDate;
    return (
        <div style={{
            width:'60%',
            height:'60%',
            margin:'10px auto ',
            }}>
      <Line options={options} data={{ labels,
  datasets: [
    {
      label: 'Corona report',
      data: yAxix,
      borderColor: 'rgb(255, 99, 132)', 
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],}} />;
        </div>
    )
}
export default LineGraph;