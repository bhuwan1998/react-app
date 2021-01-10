import * as ActionTypes from './ActionTypes'; 
import {DISHES} from '../shared/dishes';


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

export const fetchDishes = () => (dispatch) => {
    // this function gets access to the dispatch 
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
    // 2 seconds
}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
