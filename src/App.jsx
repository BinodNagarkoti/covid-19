import React, { Component } from 'react';
import { Charts, Cards, CountryPicker, Footer } from './components';
import style from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid-19.png';

const Loading = require('react-loading-animation');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
    };
  }

  async componentDidMount() {
    const fetcheddata = await fetchData();
    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;
    if (!data.confirmed) {
      return (
        <main className={style.loading}>
          <h1 style={{ textAlign: 'center' }}>Fetching COVID-19 Data</h1>
          <Loading />
        </main>
      );
    }
    return (
      <main className={style.container}>
        <img className={style.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <Footer />
      </main>
    );
  }
}

export default App;
