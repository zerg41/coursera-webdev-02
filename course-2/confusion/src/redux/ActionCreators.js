import * as ActionTypes from './ActionTypes';
// import { DISHES } from '../shared/dishes'; --no longer needed since using Fetch
import { baseUrl } from '../shared/baseUrl'; // for communicate with a server

/** ADD ACTIONS **/
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


/** DISHES LOADING ACTIONS **/
/* Thunk is returning a function */
// export const fetchDishes = () => (dispatch) => { --modified with fetch
//     dispatch(dishesLoading(true));

//     setTimeout(() => {dispatch(addDishes(DISHES))}, 2000);
// };
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)));
};

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


/** COMMENTS LOADING ACTIONS **/
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


/** PROMOTIONS LOADING ACTIONS **/
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});