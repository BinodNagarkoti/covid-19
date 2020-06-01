/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Paper } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <Paper>
        <label htmlFor="selectCountry"> Choose Country</label>
        <NativeSelect
          id="selectCountry"
          name="selectCountry"
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value=""> Global </option>
          {fetchedCountries.map((country) => (
            <option key={country} value={country}>
              {' '}
              {country}{' '}
            </option>
          ))}
        </NativeSelect>
      </Paper>
    </FormControl>
  );
};
export default CountryPicker;
