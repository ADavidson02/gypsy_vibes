import './App.css';
import { Route, Routes } from 'react-router-dom';
import TermsAndConditions from './components/termsAndConditionsPage.js';
import ExperiencePage from './components/experiencePage';

const App = () => {
  return (
    <main className='App'>
      <Routes>
        <Route
          exact
          path='/termsandconditions'
          component={TermsAndConditions}
        />
        <Route exact path='/experience' component={ExperiencePage} />
      </Routes>
    </main>
  );
};

export default App;
