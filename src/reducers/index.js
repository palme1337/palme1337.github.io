import {combineReducers} from 'redux';
import ScoresReducer from './reducer-scores';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  scores: ScoresReducer,
});

export default allReducers
