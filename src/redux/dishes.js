import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
        isLoading: true, 
        errMess: null, 
        dishes: [] // empty array initially
    }, action) => {
    switch(action.type){
        // reducer
        case ActionTypes.ADD_DISHES: 
            return {...state, isLoading: false, errMess: null, dishes: action.payload}; // ...state -> whatever the state is 

            
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}; // ...state -> whatever the state is 
        
        case ActionTypes.DISHES_FAILED: 
            return {...state, isLoading: false, errMess: action.payload, dishes: []}; // ...state -> whatever the state is 



        default: 
            return state;
    }
}