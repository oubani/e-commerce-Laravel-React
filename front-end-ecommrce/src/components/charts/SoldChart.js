import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const SoldChart = () => {
  const [dailyData, setDailyData] = useState([1, 2]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            data: [12, 21, 15, 23, 11],
            label: 'Solds ',
            borderColor: '#1e3d59',
            backgroundColor: 'rgba(0,0,0,0)',
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Sold</h1>
      {lineChart}
    </div>
  );
};

export default SoldChart;
