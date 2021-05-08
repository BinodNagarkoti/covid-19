/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormControl, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: 50,
    minWidth: 220,
  },
}));
const ChartPicker = ({ handleChartChange, chartType }) => {
  const classes = useStyles();
  //   const [chartType, setChartType] = useState('');

  //   useEffect(() => {
  //     const fetchAPI = async () => {
  //       setFetchedCountries(await fetchCountries());
  //       // console.log(`country List: ${fetchedCountries}`);
  //     };
  //     fetchAPI();
  //   }, [setChartType]);

  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        label="Chart"
        inputProps={{
            name: 'chart',
            id: `${chartType}_chart`,
        }}
        onChange={(e) => handleChartChange(e.target.value)}
      >
        <option value="Daily Data">
          Daily Data
        </option>
        <option value="Monthly Data">
                  Monthly Data
        </option>
        <option value="Yearly Data">
                  Yearly Data
        </option>
      </Select>
    </FormControl>
  );
};
export default ChartPicker;
