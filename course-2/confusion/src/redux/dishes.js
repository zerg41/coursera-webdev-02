// import { DISHES } from '../shared/dishes'; --moved to ActionCreators since Redux Thunk using
import * as ActionTypes from './ActionTypes';

// export const Dishes = (state = DISHES, action) => { --no longer since DISHES moved to ActionCreators
export const Dishes = (state = {isLoading: true, errMess: null, dishes: []}, action) => {
    switch(action.type) {

        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        
        default:
            return state;
    };
};