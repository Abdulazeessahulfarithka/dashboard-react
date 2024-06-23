import React from 'react';
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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Planned Actual Activity',
    },
  },
};

const labels = ['Masonry',"RCC",'Excavation',"PCC 1:3:6Mix"];

export const data = {
    
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[40,35,12,4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [10,34,12,6],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export default  function App() {
  return <Bar options={options} data={data} />;
}
