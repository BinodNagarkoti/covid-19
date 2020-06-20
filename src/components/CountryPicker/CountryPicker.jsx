/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Select, FormControl, Paper } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: 50,
    minWidth: 220,
  },
}));
const CountryPicker = ({ handleCountryChange }) => {
  const classes = useStyles();
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl  className={classes.formControl}>
      <InputLabel shrink htmlFor="outlined-age-native-simple">
        Country
      </InputLabel>
      <Select
        native
        label="Country"
        inputProps={{
          name: 'Country',
          id: '',
        }}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option aria-label="None" value="">
          Global
        </option>
        {fetchedCountries.map((country) => (
          <option key={country} value={country}>
            {' '}
            {country}{' '}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
export default CountryPicker;
