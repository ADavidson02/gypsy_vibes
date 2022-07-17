import './App.css';
import { Route, Routes } from 'react-router-dom';
import TermsAndConditions from './components/termsAndConditionsPage.js';

const App = () => {
  return (
    <main className='App'>
      <Routes>
        <Route
          exact
          path='/termsandconditions'
          component={TermsAndConditions}
        />
      </Routes>
    </main>
  );
};

export default App;
