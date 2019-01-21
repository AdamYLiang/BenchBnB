import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entitiesReducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;