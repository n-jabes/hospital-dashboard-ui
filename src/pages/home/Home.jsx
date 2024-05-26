import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

import { LineChart } from '@mui/x-charts/LineChart';

const baseURL = 'https://innovahyperbackend.onrender.com';

function Home() {
  const [data, setData] = useState([]);
  const [cardsData, setCardsData] = useState({
    screenedPeople: 0,
    averageHeartBeat: 0,
    averageWeight: 0,
    averageTemperature: 0,
  });
  const [error, setError] = useState('');
  const [chartPatients, setChartPatients] = useState([]);
  const [chartHours, setChartHours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for the chart
        const chartResponse = await axios.get(
          `${baseURL}/medicalRecords/total-patients-by-hour`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(chartResponse.data.data);
        const chartData = chartResponse.data.data.map((item) => ({
          hours: item.hour,
          patients: item.totalPatients,
        }));
        setData(chartData);
        console.log(chartData);

        // Extract uData and pData from chartData
        setChartHours(chartData.map((item) => item.hours));
        setChartPatients(chartData.map((item) => item.patients));

        console.log('uData:', chartHours);
        console.log('pData:', chartPatients);

        // Fetch data for the cards
        const cardsResponse = await axios.get(
          `${baseURL}/medicalRecords/average-medical-data`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        console.log(cardsResponse.data);
        const { averageBloodPressure, averageWeight, averageTemperature } =
          cardsResponse.data;
        setCardsData({
          screenedPeople: chartResponse.data.data.reduce(
            (sum, item) => sum + item.totalPatients,
            0
          ), // Sum of total patients
          averageBloodPressure,
          averageWeight,
          averageTemperature,
        });
      } catch (error) {
        console.log('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <p className="title">Screened people today</p>
          <h1>{cardsData.screenedPeople}</h1>
        </div>
        <div className="card">
          <p className="title">Average Blood Pressure</p>
          <h1>{cardsData.averageBloodPressure} hm/hr</h1>
        </div>
        <div className="card">
          <p className="title">Average Weight</p>
          <h1>{cardsData.averageWeight} kg</h1>
        </div>
        <div className="card">
          <p className="title">Average Temperature</p>
          <h1>
            {cardsData.averageTemperature} <sup>o</sup>C
          </h1>
        </div>
      </div>

      <div className="charts">
        {/* <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hours" />
            <YAxis dataKey="patients" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#A6CEE3"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="hours" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer> */}

        <div className="chartContainer">
          <LineChart
            width={950}
            height={300}
            series={[
              { data: chartPatients, label: 'patients' },
              { data: chartHours, label: 'hours' },
            ]}
            xAxis={[{ scaleType: 'point', data: chartHours }]}
          />
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </main>
  );
}

export default Home;
