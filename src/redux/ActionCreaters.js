import * as ActionTypes from './ActionTypes'; 

export const addComment = (dishId, rating, author, comment) => ({
    // every action object should have a type
    type:ActionTypes.ADD_COMMENT, 
    payload: {
        // one way of defining it 
        dishId: dishId, 
        rating: rating, 
        author: author, 
        comment: comment
        // four params that function recieves maped 
        // into four properties inside the payload object here
        
    }
});