import "./App.css";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
      {
          data: [12.80, 51.2],
          backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235, 1)',
          ],
          borderRadius: 10,
          borderWidth: 0
      },
  ],
};

const options = {
  cutout: "90%",
};

export function App() {
  return <Doughnut data={data} options={options} />;
}

export default App;
