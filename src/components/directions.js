import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import howItWorks from '../assets/about.js';

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

const Directions = () => {
  const classes = useStyles;
  console.log(howItWorks.Title);
  return (
    <Container>
      <Grid
        container
        direction='row'
        justifyContent='space-evenly'
        className={classes.root}
        style={{ background: 'pink' }}
      >
        <ul class='termsList'>
          {howItWorks.map((direction) => (
            <React.Fragment>
              <Grid item>.....{direction.title}....</Grid>
              <Grid item>{direction.intro}</Grid>
              {direction.steps.map((step) => (
                <li key={step.id}>{step.step}</li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </Grid>
    </Container>
  );
};

export default Directions;
