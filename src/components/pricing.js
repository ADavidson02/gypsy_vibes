import React, { Component } from 'react';
import pricingInfo from '../assets/pricingInfo';
import './pricing.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

class PricingPage extends Component {
  render() {
    return (
      <Grid container direction='column' gap={2} className='mainContainer'>
        <Grid
          item
          container
          direction='column'
          className='containerLeft'
          gap={2}
        >
          <Grid
            item
            direction='row'
            className='titleHeader'
            sm={2}
            md={2}
            lg={2}
            xl={2}
            flexGrow={1}
            gap={2}
          >
            Pricing.....
          </Grid>
          <Grid item>Image</Grid>
        </Grid>

        <Grid
          container
          item
          sm={4}
          xl={4}
          lg={4}
          md={4}
          className='containerRight'
          direction='column'
        >
          <div className='subTitle'>Private Event Only </div>
          <div>(Includes personalized digital invite)</div>
          <Grid item>
            {pricingInfo.map((info) => (
              <ul key={info.id}>
                <li>title{info.title}</li>
                {info.info.map((i) => (
                  <ul>
                    <li>subTitle: {i.subTitle} </li>
                    {i.details.map((deets) => (
                      <li>{deets}</li>
                    ))}
                    <li>Price: {i.price}</li>
                  </ul>
                ))}
              </ul>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default PricingPage;
