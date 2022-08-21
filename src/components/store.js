import React, { Component } from 'react';
import forSale from '../assets/forSale';
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
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    gap: '0 30px',
    backgroundColor: 'pink',
    height: 300, // set the height limit to your liking
    overflow: 'auto',
  },
});

const Store = () => {
  const classes = useStyles;

  return (
    <Grid xs={12} container style={{}}>
      {forSale.map((title) => (
        <React.Fragment>
          <Grid
            item
            container
            direction='row'
            style={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',

              fontSize: '48px',
              fontFamily: 'Fantasy',
              fontWeight: 'bold',
              paddingTop: '3vh',
            }}
          >
            ...{title.pageTitle}...
          </Grid>
          {title.vendors.map((vendor) => (
            <Grid container='column'>
              <Container
                spacing={10}
                style={{
                  display: 'flex',
                  flexFlow: 'column',
                  // set the height limit to your liking
                }}
                xs={12}
              >
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    alignContent: 'stretch',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  xs={12}
                >
                  Offered by {vendor.name}
                </Grid>
                <Grid
                  xs={12}
                  container
                  direction='column'
                  style={{
                    display: 'flex',
                    wrap: 'wrap',
                    flexDirection: 'row',
                  }}
                >
                  {vendor.items.map((item) => (
                    <Grid
                      item
                      xs={6}
                      sx={{ m: -2 }}
                      style={{   }}
                      gutterBottom
                    >
                      <Card
                        key={item.id}
                        gutterBottom
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignContent: 'stretch',
                          paddingTop: '5px',
                          paddingRight: '10px',
                          paddingBottom: '5px',
                          placeContent: 'stretch center',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-end',
                          height: '15vh',
                          margin: '10px'
                        }}
                      >
                        <CardContent
                          style={{
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            placeContent: 'stretch flex-end',
                            alignItems: 'end',
                            textAlign: 'end',
                            marginBlockStart: '11px',
                          }}
                          sx={{ p: 4 }}
                        >
                          <Typography gutterBottom variant='h6' component='div'>
                            {item.product} - {item.price}
                          </Typography>
                          <Typography
                            gutterBottom
                            gutterLeftx
                            gutterRight
                            variant='body2'
                            color='text.secondary'
                          >
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardMedia
                          component='img'
                          height='140'
                          style={{
                            background: 'lightgray',
                            width: '80px',
                            height: '80px',
                            margin: '11px',
                          }}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Grid>
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Store;
