import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TermsAndConditions from './components/termsAndConditions/termsAndConditions';

const App = () => {
  return (
    <main className='App'>
      <Switch>
        <Route
          exact
          path='/termsandconditions'
          component={TermsAndConditions}
        />
      </Switch>
    </main>
  );
};

export default App;
