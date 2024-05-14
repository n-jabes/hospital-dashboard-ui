import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

function Home() {
  const data = [
    {
      hours: 0,
      patients: 10,
    },
    {
      hours: 1,
      patients: 20,
    },
    {
      hours: 2,
      patients: 30,
    },
    {
      hours: 3,
      patients: 40,
    },
    {
      hours: 4,
      patients: 50,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <p className="title">Screened people today</p>
          <h1>305</h1>
        </div>
        <div className="card">
          <p className="title">Average Heart beat</p>
          <h1>98.3hm/hr</h1>
        </div>
        <div className="card">
          <p className="title">Average Weight</p>
          <h1>65 kg</h1>
        </div>
        <div className="card">
          <p className="title">Average Temperature</p>
          <h1>
            37.5 <sup>o</sup>C
          </h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
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
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
