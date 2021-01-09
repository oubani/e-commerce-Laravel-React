import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const VisitsChart = () => {
  const [dailyData, setDailyData] = useState([1, 2]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            data: [120, 61, 105, 123, 211],
            label: 'Solds $',
            borderColor: '#ff6e40',
            backgroundColor: 'rgba(0,0,0,0)',
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Visits</h1>
      {lineChart}
    </div>
  );
};

export default VisitsChart;
