import React, { Component } from 'react';
import './termsAndConditionsPage.css';
import rules from '../assets/rules.js';

class TermsAndConditions extends Component {
  render() {
    return (
      <div>
        <div class='titleHeader'>
          .....Terms, conditions & other not fun stuff.....
        </div>
        <ul class='termsList'>
          {rules.map(rule => (
            <li key={rule.id} className='termsText'>
              {rule.rule}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TermsAndConditions;
