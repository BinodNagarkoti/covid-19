/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';
// eslint-disable-next-line import/named
import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

const Charts = ({ country }) => {
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData(country));
    };
    fetchAPI();
  }, [country]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ active }) => active),
            label: 'Active',
            borderColor: 'rgba(0,0,255,0.5)',
            backgroundColor: 'rgba(0,0,255,0.5)',
            fill: true,
          },
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: 'Recovered',
            borderColor: 'rgba(0,187,0,0.5)',
            backgroundColor: 'rgba(0,255,0,0.5)',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'rgba(255,0,0,0.5)',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  // const barChart = active ? (
  //   <Bar
  //     data={{
  //       labels: ['infected', 'recovered', 'deaths'],
  //       datasets: [
  //         {
  //           label: 'People',
  //           backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
  //           data: [active, recovered, deaths],
  //         },
  //       ],
  //     }}
  //     options={{
  //       legends: { display: false },
  //       title: { display: true, text: `Current State in ${country}` },
  //     }}
  //   />
  // ) : null;
  return (
    <div className={styles.container}>
      <Paper
        style={{
          width: '100vw',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          boxShadow:
            '6px 6px 14px 0 rgba(0, 0, 0, 0.253) , -8px -8px 18px 0 rgba(255, 255, 255, 0.76) ',
        }}
      >
        {/* {country ? barChart : lineChart} */}
        {lineChart}
      </Paper>
    </div>
  );
};
export default Charts;
