import React, { Component } from 'react';
import pricingInfo from '../assets/pricingInfo';
import './pricing.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    background: 'purple',
  },
  paper: {
    height: 2000,
    width: 100,
  },
  control: {},
  containerLeft: {
    margin: 'auto',
    backgroundColor: 'blue',
    flexGrow: 1,
  },
  containerRight: {
    backgroundColor: 'pink',
    flexGrow: 1,
  },
});

const PricingPage = () => {
  const classes = useStyles;

  return (
    <Box className={classes.root} style={{ backgroundColor: 'purple' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        className={classes.root}
        style={{ background: 'pink' }}
      >
        <Grid
          item
          container
          direction='column'
          justifyContent='center'
          alignItems='stretch'
          xs={8}
          className={classes.containerLeft}
          style={{ background: 'blue' }}
        >
          <Grid
            item
            container
            xs={9}
            direction='column'
            justifyContent='center'
            alignItems='stretch'
            style={{ background: 'red' }}
          >
            <div className={classes.paper}>Pricing.....</div>
          </Grid>
          <Grid
            item
            container
            xs={8}
            justifyContent='center'
            alignItems='stretch'
            style={{ background: 'yellow' }}
          >
            <div className={classes.paper}>Image</div>
          </Grid>
        </Grid>
        <Grid
          container
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          xs={4}
          className={classes.containerRight}
        >
          <div>Private Event Only </div>
          <div>(Includes personalized digital invite)</div>
          <Grid item>
            {pricingInfo.map((info) => (
              <ul key={info.id} className='miniSection'>
                <li className='sectionTitle'>{info.title}</li>
                {info.info.map((i) => (
                  <ul className='sectionInfo'>
                    <li>{i.subTitle} </li>
                    {i.details.map((deets) => (
                      <li>{deets}</li>
                    ))}
                    <li>-${i.price} per person</li>
                  </ul>
                ))}
              </ul>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingPage;
