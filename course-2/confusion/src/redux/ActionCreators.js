import * as ActionTypes from './ActionTypes';
// import { DISHES } from '../shared/dishes'; --no longer needed since using Fetch
import { baseUrl } from '../shared/baseUrl'; // for communicate with a server

/** ADD ACTIONS **/
// export const addComment = (dishId, rating, author, comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: {
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment
//     }
// });
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else { // in case of wrong URL like
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => { // in case of impossibility to connect to to a server for example
            let errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post comments', error.message);
            alert('Your comment could not be posted\n Error: ' + error.message);
        });
}


/** DISHES LOADING ACTIONS **/
/* Thunk is returning a function */
// export const fetchDishes = () => (dispatch) => { --V modified with fetch
//     dispatch(dishesLoading(true));

//     setTimeout(() => {dispatch(addDishes(DISHES))}, 2000);
// };
/* Using Fetch */
// export const fetchDishes = () => (dispatch) => { 
//     dispatch(dishesLoading(true));

//     return fetch(baseUrl + 'dishes')
//             .then(response => response.json())
//             .then(dishes => dispatch(addDishes(dishes)));
// };
/* Handle Error */
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else { // in case of wrong URL like
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => { // in case of impossibility to connect to to a server for example
                let errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)));
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
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmess = new Error (error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
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
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => {
                let errmess = new Error (error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => dispatch(promosFailed(error.message)));
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