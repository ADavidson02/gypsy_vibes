import './App.css';
import { Route, Routes } from 'react-router-dom';
import TermsAndConditions from './components/termsAndConditionsPage.js';
import Experience from './components/experiencePage';

const App = () => {
  return (
    <main className='App'>
      <Routes>
        <Route
          exact
          path='/termsandconditions'
          component={TermsAndConditions}
        />
        <Route
        exact
        path='/experience'
        component={Experience}
        />
      </Routes>
    </main>
  );
};

export default App;
