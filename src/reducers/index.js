import {combineReducers} from 'redux';
import abouts from './aboutReducer';
import services from './serviceReducer';
import blogs from './blogReducer';
const rootReducer = combineReducers({
    abouts,
    services,
    blogs
});
export default rootReducer;