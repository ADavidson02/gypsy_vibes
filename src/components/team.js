import React, { Component } from 'react';
import covenMembers from '../assets/covenMembers';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    background: 'purple',
  },
  card: {
    paddingBottom: '20px',
    background: 'yellow',
    height: '70vh',
    paddingBottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

const Coven = () => {
  const classes = useStyles;

  return (
    <Grid container style={{ padding: '20px' }}>
      {covenMembers.map((member) => (
        <React.Fragment>
          <Grid
            item
            container
            direction='column'
            style={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              width: '100%',
              fontSize: '48px',
              fontFamily: 'Fantasy',
              fontWeight: 'bold',
              paddingTop: '7vh',
            }}
          >
            ...{member.pageTitle}...
          </Grid>
          <Grid
            container='row'
            style={{
              width: '100%',
              height: '80%',
              display: 'flex',
              flexWrap: 'nowrap',
              boxSizing: 'border-box',
            }}
          >
            {member.members.map((mem) => (
              <Grid container='column'>
                <Container>
                  <Card
                    key={mem.id}
                    spacing={5}
                    style={{
                      paddingBottom: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'nowrap',
                      alignContent: 'stretch',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='140'
                      style={{ background: 'lightgray', width: '165px' }}
                    />
                    <CardContent
                      style={{
                        paddingBottom: '20px',
                        height: '70vh',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        alignContent: 'stretch',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingLeft: '60px',
                        paddingRight: '60px',
                        textAlign: 'center',
                      }}
                      sx={{ p: 4 }}
                    >
                      <Typography gutterBottom variant='h5' component='div'>
                        {mem.name}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        {mem.title}
                      </Typography>
                      <Typography
                        gutterBottom
                        gutterLeft
                        gutterRight
                        variant='body2'
                        color='text.secondary'
                      >
                        {mem.details}
                      </Typography>
                    </CardContent>
                  </Card>
                </Container>
              </Grid>
            ))}
          </Grid>
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              width: '100%',
              fontSize: '25px',
              fontFamily: 'fantasy',
              fontWeight: 'bold',
              flexDirection: 'column',
            }}
          >
            {member.footer}
          </div>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Coven;
