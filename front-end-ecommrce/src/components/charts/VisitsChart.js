import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { authApi, link } from '../../Api/Api';

const VisitsChart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    async function getVisits() {
      const response = await authApi(`${link}/countVisits`);
      console.log(response);
      setDailyData(response.data);
    }

    getVisits();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: [...dailyData.map((data) => data.date)],
        datasets: [
          {
            data: [...dailyData.map((data) => data.count)],
            label: 'Visits ',
            borderColor: '#ff6e40',
            backgroundColor: 'rgba(0,0,0,0)',
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Visits :</h1>
      {lineChart}
    </div>
  );
};

export default VisitsChart;
