import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/Comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS, 
    promotions: PROMOTIONS,
    leaders: LEADERS
}; // initial config for the state 

// first reducer function 
export const Reducer = (state = initialState, action) => {
    // we cannot modify the state here
    return state; // default for now!  
};
