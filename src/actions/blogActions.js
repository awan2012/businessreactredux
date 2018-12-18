import * as types from './actionTypes';
import blogApi from '../api/mockBlogApi';

export function loadBlogsSuccess(blogs)
{    
    return {type: types.LOAD_BLOGS_SUCCESS,blogs};
}

//Thunk
export function loadBlogs(){
    return function(dispatch){
        return blogApi.getAllBlogs().then(blogs => {
            dispatch(loadBlogsSuccess(blogs));
        }).catch(error => {
            throw(error);
        });
    };
}