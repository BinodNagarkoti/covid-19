/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid item color="primary" xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Total Number of active case of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Recoverd
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>

            <Typography variant="body2"> Total Number of recovered from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>

            <Typography variant="body2"> Total Number of death caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
