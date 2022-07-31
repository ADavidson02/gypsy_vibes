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
    <Container
      className={classes.root}
      style={{ background: 'orange', flexWrap: 'nowrap' }}
    >
      <Grid
        direction='row'
        justifyContent='space-evenly'
        wrap='nowrap'
        className={classes.root}
        style={{ background: 'blue', height: '100vh', display: 'flex' }}
        xs={12}
      >
        {howItWorks.map((direction) => (
          <React.Fragment>
            <Grid
              item
              direction='column'
              justifyContent='space-evenly'
              className={classes.root}
              style={{ background: 'blue', height: '80vh' }}
              xs={6}
            >
              <Paper item>.....{direction.title}....</Paper>
            </Grid>
            <Grid
              item
              direction='column'
              justifyContent='space-evenly'
              className={classes.root}
              style={{ background: 'purple' }}
              xs={6}
            >
              <Paper style={{ height: '100vh', listStyle:'none'  }}>
                {direction.intro}
                {direction.steps.map((step) => (
                  <li key={step.id}>{step.step}</li>
                ))}
              </Paper>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Directions;
