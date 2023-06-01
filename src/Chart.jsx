import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ labels, title, data1, data2, c1, c2 }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Money Exchange',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: c1,
        data: data1,
        borderColor: 'rgb(108, 42, 16)',
        backgroundColor: 'rgb(108, 42, 16, 0.5)',
      },
      {
        label: c2,
        data: data2,
        borderColor: 'rgb(165, 42, 42)',
        backgroundColor: 'rgb(165, 42, 42, 0.5)',
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart;
