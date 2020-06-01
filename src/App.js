/** @format */
import React, { Component } from 'react';
import { Cards, Charts, CountryPicker, Footer } from './components';
import { Paper } from '@material-ui/core';
import style from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid-19.png';
import { Typography } from '@material-ui/core';
import { setColor } from './randomColor';
const Loading = require('react-loading-animation');

class App extends Component {
    state = {
        data: {},
        country: '',
        color: '',
    };

    async componentDidMount() {
        const fetcheddata = await fetchData();

        this.setState({ data: fetcheddata, color: `${setColor()}` });
        document.body.style.backgroundColor = `${setColor()}`;

    }
    handleCountryChange = async (country) => {
        // console.log(country);
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        this.setState({ data: fetchedData, country: country });
    };
    render() {
        const { data, country, color } = this.state;
        if (!data.confirmed) {
            return (
                <div>
                    <Typography
                        color='textPrimary'
                        variant='h2'
                        style={{ textAlign: 'center' }}
                        gutterBottom
                    >
                        Fetching Data
                    </Typography>
                    <Loading />
                </div>
            );
        }
        return (
            <div className={style.container}>
                <img
                    className={style.image}
                    src={coronaImage}
                    style={{ fill: 'white' }}
                    alt='COVID-19'
                />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
                <Footer />
            </div>
        );
    }
}

export default App;
