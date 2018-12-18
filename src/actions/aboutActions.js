import * as types from './actionTypes';
import aboutApi from '../api/mockAboutApi';

export function loadAboutsSuccess(abouts)
{    
    return {type: types.LOAD_ABOUTS_SUCCESS,abouts};
}

//Thunk
export function loadAbouts(){
    return function(dispatch){
        return aboutApi.getAllAbouts().then(abouts => {
            dispatch(loadAboutsSuccess(abouts));
        }).catch(error => {
            throw(error);
        });
    };
}