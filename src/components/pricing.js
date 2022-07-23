import React, { Component } from 'react';
import pricingInfo from '../assets/pricingInfo';
import './pricing.css';

class PricingPage extends Component {
  render() {
    return (
      <div>
        <div className='titleHeader'>Pricing.....</div>
        <div className='subTitle'>Private Event Only </div>
        <div>(Includes personalized digital invite)</div>
        <ul className='conatinerRight'>
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
        </ul>
      </div>
    );
  }
}

export default PricingPage;
