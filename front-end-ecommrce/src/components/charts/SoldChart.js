import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { authApi, link } from '../../Api/Api';

const SoldChart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    async function getSolds() {
      const response = await authApi(`${link}/getOrdersStatics`);
      console.log(response.data);
      setDailyData(response.data);
    }
    getSolds();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: [...dailyData.map((data) => data.date)],
        datasets: [
          {
            data: [...dailyData.map((data) => data.solds)],
            label: 'Solds Dh ',
            borderColor: '#1e3d59',
            backgroundColor: 'rgba(0,0,0,0)',
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Solds Dh : </h1>
      {lineChart}
    </div>
  );
};

export default SoldChart;
