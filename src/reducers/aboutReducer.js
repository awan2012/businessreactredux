import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function aboutReducer(state = initialState.abouts, action) {
    switch (action.type) {

        case types.LOAD_ABOUTS_SUCCESS:
            return action.abouts;
        default:
            return state;
    }
}