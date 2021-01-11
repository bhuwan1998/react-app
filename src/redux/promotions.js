import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {
        isLoading: true, 
        errMess: null, 
        promotions: []  
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_PROMOS: 
                return {...state, isLoading: false, errMess: null, promotions: action.payload}; // ...state -> whatever the state is 

            
            case ActionTypes.PROMOS_LOADING:
                return {...state, isLoading: true, errMess: null, promotions: []}; // ...state -> whatever the state is 
        
            case ActionTypes.PROMOS_FAILED: 
                return {...state, isLoading: false, errMess: action.payload, promotions: []}; // ...state -> whatever the state is 

        
        // Reducer
        default: 
            return state;
    }
}