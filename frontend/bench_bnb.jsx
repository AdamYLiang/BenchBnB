import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { createNewUser, login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = {};
  let preloadedState = {}; 
  if(window.currentUser) {
    preloadedState = {
      session: { 
        currentUser: { id: window.currentUser. id }
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    delete window.currentUser;
    store = configureStore(preloadedState);
  } 
  else {
    store = configureStore();
  }

  //TEST FUNCTIONS, DELETE AFTER DEVELOPMENT
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.c = createNewUser;
  window.login = login;
  //END TEST FUNCTIONS
  
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={ store } />, root )
});