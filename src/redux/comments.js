import { COMMENTS } from '../shared/Comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        // reducer 
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length; // comments is a javascript array - sequential order 
            comment.date = new Date().toISOString();
            return state.concat(comment); 
        default: 
        // concatinating an immutable object
            return state // adding comment to set of objects 
            // not in persistent memory  
    }
}