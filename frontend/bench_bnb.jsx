import React from 'react';
import ReactDOM from 'react-dom';
import {postSession, postUser, deletSession} from './util/session_api_util';
import configureStore from './store/store';
import { receiveCurrentUser } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.signup = receiveCurrentUser;
  window.logout = deletSession;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render( <h1>Welcome to BenchBnB</h1>, root )
});