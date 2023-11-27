// reducers.js
import { combineReducers } from 'redux';
import missionReducer from './missionReducer';
// ... other reducers

const rootReducer = combineReducers({
  mission: missionReducer,
  // ... other reducers
});

export default rootReducer;
