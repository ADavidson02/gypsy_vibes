import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TermsAndConditions from './components/termsAndConditionsPage.js';
import Experience from './components/experiencePage';
import PricingPage from './components/pricing';
import Directions from './components/directions';
import Coven from './components/team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='termsandconditions' element={<TermsAndConditions />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/directions' element={<Directions />} />
      <Route path='/coven' element={<Coven />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
