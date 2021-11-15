import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Reducer, initialState } from './reducer'; --no longer used since Reduser separating and App initialized initialState
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer,
//         initialState,
//     );

//     return store;
// };
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};