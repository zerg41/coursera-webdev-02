// import { COMMENTS } from '../shared/comments'; --no longer needed since using Redux Store
import * as ActionTypes from './ActionTypes';

// export const Comments = (state = COMMENTS, action) => {
//     switch(action.type) {
export const Comments = (state = { errMes: null, comments: [] }, action) => {
    switch(action.type) {

        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload, comments: []};
        
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            // comment.id = state.length; --since state is object with comments array
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            // console.log("Comment: ", comment); --handler no longer needed
            // return state.concat(comment); --since state is object
            return {...state, comments: state.comments.concat(comment)};
        
        default:
            return state;
    };
};