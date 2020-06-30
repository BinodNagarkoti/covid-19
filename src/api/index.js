/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import axios from 'axios';
import * as d3 from 'd3';

// const url = 'https://covid19.mathdro.id/api';
const url2 = 'https://corona-api.com/';
let ChangeableURL = url2;

const GroupData = async () => {
  ChangeableURL = `${url2}/timeline`;
  try {
    const {
      data: { data },
    } = await axios.get(ChangeableURL);

    const groupedByDate = await d3
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
const fetchcriticalData = async () => {
  const {
    data: { data },
  } = await axios.get(`${url2}/countries`);
  const critical_arr_data = data.map((item) => item.latest_data.critical);
  const total = critical_arr_data.reduce((acc, value) => acc + value);
  return total;
  // console.log(criticalData);
};

const fetchGlobalData = async () => {
  ChangeableURL = `${url2}/timeline`;
  fetchcriticalData();
  try {
    const {
      data: { data },
    } = await axios.get(ChangeableURL);
    // const { data } = fetchedData.data;

    const {
      confirmed,
      recovered,
      deaths,
      updated_at,
      active,
      new_confirmed,
      new_recovered,
      new_deaths,
    } = data[0];
    const totalCritical = await fetchcriticalData();
    // const totalCritical = critical_arr_data.reduce((acc, value) => acc + value);
    console.log(`total critical value: ${totalCritical}`);
    // console.log(`lastUpdate:,${ lastUpdate }`)

    return {
      confirmed,
      recovered,
      deaths,
      updated_at,
      active,
      critical: totalCritical,
      new_confirmed,
      new_recovered,
      new_deaths,
    };
  } catch (error) {
    console.error(error);
  }
};
const fetchCountryBasedData = async (country) => {
  ChangeableURL = `${url2}/countries/${country}`;
  console.log(`Selected Country:,${country}`);
  try {
    const {
      data: { data },
    } = await axios.get(ChangeableURL);
    // const { data } = fetchedData.data;

    const {
      latest_data: { confirmed, recovered, deaths, active, critical, calculated },
      updated_at,
    } = data;
    return {
      critical,
      confirmed,
      recovered,
      deaths,
      updated_at,
      active,

      loading: false,
    };
  } catch (error) {
    console.error(error);
  }
};
export const fetchData = async (country) => {
  GroupData();
  const data = country ? fetchCountryBasedData(country) : fetchGlobalData();
  return data;
};
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
