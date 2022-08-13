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
});

const Store = () => {
  const classes = useStyles;

  return (
    <Container
      style={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'lightblue',
      }}
      maxWidth='false'
      xl={12}
    >
      <Grid
        xs={12}
        container
        style={{
          height: '100vh',
        }}
      >
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
                width: '100%',
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
                <Container>
                  Offered by {vendor.name}
                  <Grid item xs={9}>
                    {vendor.items.map((item) => (
                      <Card
                        key={item.id}
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
                            {item.product}
                          </Typography>
                          <Typography gutterBottom variant='h6'>
                            {item.price}
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
                      </Card>
                    ))}
                  </Grid>
                </Container>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Store;
