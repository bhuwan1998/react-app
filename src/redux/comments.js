import { COMMENTS } from '../shared/Comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null, 
    comments: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS: 
            return {...state,isLoading: false, errMess: null, comments: action.payload };
        
            // ...state -> whatever the state is 
        
        case ActionTypes.COMMENTS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload, comments: []}; // ...state -> whatever the state is 
           
        // reducer 
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length; // comments is a javascript array - sequential order 
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)}; 
        default: 
        // concatinating an immutable object
            return state // adding comment to set of objects 
            // not in persistent memory  
    }
}