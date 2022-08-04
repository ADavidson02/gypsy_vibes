import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import howItWorks from '../assets/about.js';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    wrap: 'Nowrap',
    height: '100vh',
  },
  paper: {
    height: '100%',
  },
  title: {
    fontSize: '25px',
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

const Directions = () => {
  const classes = useStyles;
  console.log(howItWorks.Title);
  return (
    <Grid container style={{ padding: '20px' }}>
      <Grid
        direction='row'
        justifyContent='space-evenly'
        wrap='nowrap'
        className={classes.root}
        style={{ height: '100vh', display: 'flex' }}
        xs={12}
      >
        {howItWorks.map((direction) => (
          <React.Fragment>
            <Grid
              item
              direction='column'
              justifyContent='space-evenly'
              className={classes.root}
              style={{ height: '100vh' }}
              xs={6}
            >
              <Grid
                item
                style={{
                  fontSize: '48px',
                  fontFamily: 'Fantasy',
                  paddingTop: '9vh',
                  marginLeft: '40px',
                  marginBottom: '-26px',
                  fontWeight: 'bold',
                }}
              >
                .....{direction.title}....
              </Grid>
              <Grid
                item
                style={{
                  height: '100vh',
                  listStyle: 'none',
                  fontSize: '25px',
                  lineHeight: '29pt',
                }}
              >
                {direction.intro}
                {direction.steps.map((step) => (
                  <Grid Item key={step.id}>
                    {step.step}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
        <Grid
          item
          container
          direction='column'
          justifyContent='space-evenly'
          style={{
            background: 'blue',
            marginTop: '105px',
            marginBottom: '105px',
          }}
          xs={5}
        >
          <Grid
            item
            direction='row'
            style={{
              marginTop: '105px',
              marginBottom: '105px',
            }}
          >
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Directions;
