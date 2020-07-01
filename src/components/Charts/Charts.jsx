/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';
// eslint-disable-next-line import/named
import { fetchDailyData, fetchGlobalMonthlyData } from '../../api';
import styles from './Charts.module.css';

const Charts = ({ country }) => {
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [monthNames, setMonthNames] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);

  const fetchAPI = async () => {
    setDailyData(await fetchDailyData(country));
    setMonthlyData(await fetchGlobalMonthlyData(country));
    // console.table(monthlyData);
  };
  useEffect(() => {
    fetchAPI();
  }, [country]);
  const MonthluChart = monthlyData.length ? (
    <Line
      data={{
        labels: monthlyData.map(({ key }) => monthNames[key]),
        datasets: [
          {
            data: monthlyData.map(({ value: { active } }) => active),
            label: 'Active',
            borderColor: 'rgba(0,0,255,0.5)',
            backgroundColor: 'rgba(0,0,255,0.5)',
            fill: true,
          },
          {
            data: monthlyData.map(({ value: { recovered } }) => recovered),
            label: 'Recovered',
            borderColor: 'rgba(0,187,0,0.5)',
            backgroundColor: 'rgba(0,255,0,0.5)',
            fill: true,
          },
          {
            data: monthlyData.map(({ value: { deaths } }) => deaths),
            label: 'Deaths',
            borderColor: 'rgba(255,0,0,0.5)',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : (
    ''
  );
  const dailyChart = dailyData.length ? (
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
        {/* {country ? barChart : dailyChart} */}
        <div style={{ marginTop: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Daily Charts</h1>
          {dailyChart}
        </div>
        <div style={{ marginTop: '20px' }}>
          <h1 style={{ textAlign: 'center' }}> Monthly charts</h1>
          {MonthluChart}
        </div>
        {/* <pre style={{ margin: '100px 0 0 0  ' }}>
          {JSON.stringify(
            monthlyData.map(({ key }) => monthNames[key]),
            null,
            2
          )} */}
        {/* </pre> */}
      </Paper>
    </div>
  );
};
export default Charts;
