/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import axios from 'axios';
import * as d3 from 'd3';

// const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://corona-api.com/';
let ChangeableURL = url2;

const fetchGlobalMonthlyData = async () => {
  ChangeableURL = `${url2}/timeline`;
  try {
    const {
      data: { data },
    } = await axios.get(ChangeableURL);

    const groupedByDate = d3
      .nest()
      .key((d) => {
        console.log(new Date(d.updated_at).getMonth());
        return new Date(d.updated_at).getMonth();
      })
      .rollup((value) => ({
        confirmed: d3.sum(value, (d) => d.confirmed),
        deaths: d3.sum(value, (d) => d.deaths),
        active: d3.sum(value, (d) => d.active),
        recovered: d3.sum(value, (d) => d.recovered),
      }))
      .entries(data);
    console.log('group by date', groupedByDate);
  } catch (error) {
    console.log(error);
  }
};
// fetch data
const fetchGlobalCriticalData = async () => {
  const {
    data: { data },
  } = await axios.get(`${url2}/countries`);
  const critical_arr_data = data.map((item) => item.latest_data.critical);
  const total = critical_arr_data.reduce((acc, value) => acc + value);
  return total;
  // console.log(criticalData);
};

export const fetchData = async (country = '') => {
  ChangeableURL = country ? `${url2}/countries/${country}` : `${url2}/timeline`;
  try {
    const {
      data: { data },
    } = await axios.get(ChangeableURL);
    let covidData = {};

    if (country) {
      // const {
      //   latest_data: { confirmed, recovered, deaths, active, critical, calculated },
      //   updated_at,
      // } = data;
      covidData = {
        confirmed: data.latest_data.confirmed,
        recovered: data.latest_data.recovered,
        deaths: data.latest_data.deaths,
        active: data.latest_data.active,
        critical: data.latest_data.critial,
        calculated: data.latest_data.calculated,
        updated_at: data.updated_at,
      };
    } else {
      const totalCritical = await fetchGlobalCriticalData();

      // const {
      //   confirmed,
      //   recovered,
      //   deaths,
      //   updated_at,
      //   active,
      //   // new_confirmed,
      //   // new_recovered,
      //   // new_deaths,
      // } = data[0];

      covidData = {
        confirmed: data[0].confirmed,
        recovered: data[0].recovered,
        deaths: data[0].deaths,
        active: data[0].active,
        critical: totalCritical,
        calculated: data[0].calculated,
        updated_at: data[0].updated_at,
      };
    }
    return covidData;
  } catch (error) {
    console.log(error);
  }
};

// fetch daily data
const fetchGlobalDailyData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${url2}/timeline`);

    const modifiedData = data.map((dailyData) => ({
      recovered: dailyData.recovered,
      active: dailyData.active,
      deaths: dailyData.deaths,
      date: dailyData.date,
      loading: false,
    }));
    return modifiedData;
  } catch (error) {
    console.error(error);
  }
};
const fetchCountryBasedDailyData = async (country) => {
  try {
    const {
      data: {
        data: { timeline },
      },
    } = await axios.get(`${url2}/countries/${country}`);

    const modifiedData = timeline.map((dailyData) => ({
      recovered: dailyData.recovered,
      active: dailyData.active,
      deaths: dailyData.deaths,
      date: dailyData.date,
    }));
    return modifiedData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyData = async (country) => {
  const data = country ? fetchCountryBasedDailyData(country) : fetchGlobalDailyData();
  return data;
};

// fetch coutries
export const fetchCountries = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${url2}/countries`);

    const availabel_data = data.filter((country) => country.latest_data.confirmed > 0);
    console.log('check avaiable data', availabel_data);
    return availabel_data.map((country) => ({ name: country.name, code: country.code }));
  } catch (error) {
    console.error(error);
  }
};
