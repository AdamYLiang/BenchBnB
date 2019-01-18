import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entitiesReducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  entitiesReducer: entitiesReducer,
  sessionReducer: sessionReducer,
  errorsReducer: errorsReducer,
});

export default rootReducer;