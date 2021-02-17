import {combineReducers} from 'redux';
import courses from '../reducers/courseReducers';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;