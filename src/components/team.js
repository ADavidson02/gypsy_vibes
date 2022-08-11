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
    <Container
      style={{
        height: '100vh',
        width: '100%',
        //background: '#D6D4CD',
      }}
      maxWidth='false'
      xl={12}
    >
      <Grid
        item
        xs={12}
        container
        style={{
          height: '100vh',
        }}
      >
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
                paddingTop: '3vh',
              }}
            >
              ...{member.pageTitle}...
            </Grid>
            <Grid
              container='row'
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'nowrap',
                boxSizing: 'border-box',
                textAlign: '-webkit-center',
                marginLeft: '90px',
                marginRight: '90px',
              }}
            >
              {member.members.map((mem) => (
                <Grid container='column'>
                  <Container>
                    <Grid item xs={9}>
                      <Card
                        key={mem.id}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flexWrap: 'nowrap',
                          alignContent: 'stretch',
                          justifyContent: 'center',
                          alignItems: 'center',
                          //background: '#E9E4DE',
                          paddingTop: '30px',
                        }}
                      >
                        <CardMedia
                          component='img'
                          height='140'
                          style={{
                            background: 'lightgray',
                            width: '165px',
                          }}
                        />
                        <CardContent
                          style={{
                            height: '35vh',
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
                    </Grid>
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
                paddingTop: '10px',
              }}
            >
              {member.footer}
            </div>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Coven;
