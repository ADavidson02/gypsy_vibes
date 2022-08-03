import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import howItWorks from '../assets/about.js';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
    <Grid container style={{ backgroundColor: 'lightgray', padding: '20px' }}>
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
              style={{ background: 'lightblue', height: '100vh' }}
              xs={8}
            >
              <Grid
                item
                style={{
                  fontSize: '25px',
                  fontFamily: 'Fantasy',
                  paddingTop: '6vh',
                  paddingBottom: '2vh',
                  font: 'Comic Sans MS',
                  fontSize: '41px',
                }}
              >
                .....{direction.title}....
              </Grid>
              <Grid
                item
                style={{
                  height: '100vh',
                  listStyle: 'none',
                }}
              >
                {direction.intro}
                <Grid
                  container
                  item
                  justifyContent='space-evenly'
                  style={{ listStyle: 'none' }}
                  xs={12}
                >
                  {direction.steps.map((step) => (
                    <Card
                      elevation={4}
                      style={{
                        minHeight: '20px',
                        maxWidth: '20vh',
                        padding: '40px 10px',
                        margin: '10px 30px',
                        wrap: 'wrap',
                      }}
                      key={step.id}
                      xs={4}
                    >
                      <CardContent>{step.step}</CardContent>
                    </Card>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
        <Grid
          item
          direction='column'
          justifyContent='space-evenly'
          className={classes.root}
          style={{ background: 'purple' }}
          xs={6}
        >
          <div>Image</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Directions;
