import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />  
    <Route path="/signup" component={SignupFormContainer} />  
  </div>
);

export default App;