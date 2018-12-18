import * as types from './actionTypes';
import serviceApi from '../api/mockServiceApi';

export function loadServicesSuccess(services)
{    
    return {type: types.LOAD_SERVICES_SUCCESS,services};
}

//Thunk
export function loadServices(){
    return function(dispatch){
        return serviceApi.getAllServices().then(services => {
            dispatch(loadServicesSuccess(services));
        }).catch(error => {
            throw(error);
        });
    };
}