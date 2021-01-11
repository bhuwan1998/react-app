import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Dishes} from './dishes'; 
import {createForms} from 'react-redux-form';
import {Comments} from './comments'; 
import {Promotions} from './promotions'; 
import {Leaders} from './leaders'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes, 
            comments: Comments, 
            promotions: Promotions, 
            leaders: Leaders, // combineReducers will map it to various properties 
            // recomposed the global state 
            // overall state of the application
            ...createForms({
                feedback: InitialFeedback
            })  // adds in necessary reducer functions to the state information into our create store
            // we don't need to write our own reducers 
            
        }), 
        applyMiddleware(thunk, logger)

    );

    return store;
}