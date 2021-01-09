import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Dishes} from './dishes'; 
import {Comments} from './comments'; 
import {Promotions} from './promotions'; 
import {Leaders} from './leaders'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes, 
            comments: Comments, 
            promotions: Promotions, 
            leaders: Leaders // combineReducers will map it to various properties 
            // recomposed the global state 
            // overall state of the application 
        }), 
        applyMiddleware(thunk, logger)

    );

    return store;
}