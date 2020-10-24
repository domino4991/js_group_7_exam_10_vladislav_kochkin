import {
    ADD_NEW_COMMENT_ERROR,
    ADD_NEW_COMMENT_REQUEST, ADD_NEW_COMMENT_SUCCESS,
    CHANGE_VALUE_COMMENT,
    DELETE_COMMENT_ERROR,
    DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS,
    GET_COMMENTS_ERROR,
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS
} from "../actionTypes";
import {axiosApi} from "../../axiosApi";

const getCommentsRequest = () => ({type: GET_COMMENTS_REQUEST});
const getCommentsSuccess = data => ({type: GET_COMMENTS_SUCCESS, data});
const getCommentsError = error => ({type: GET_COMMENTS_ERROR, error});
const deleteCommentRequest = () => ({type: DELETE_COMMENT_REQUEST});
const deleteCommentSuccess = data => ({type: DELETE_COMMENT_SUCCESS, data});
const deleteCommentError = error => ({type: DELETE_COMMENT_ERROR, error});
const addNewCommentRequest = () => ({type: ADD_NEW_COMMENT_REQUEST});
const addNewCommentSuccess = data => ({type: ADD_NEW_COMMENT_SUCCESS, data});
const addNewCommentError = error => ({type: ADD_NEW_COMMENT_ERROR, error});

export const changeValueComment = e => ({type: CHANGE_VALUE_COMMENT, name: e.target.name, value: e.target.value});

export const getComments = id => {
    return async dispatch => {
        dispatch(getCommentsRequest());
        try {
            const response = await axiosApi.get(`/comments?news_id=${id}`);
            dispatch(getCommentsSuccess(response.data));
        } catch (e) {
            dispatch(getCommentsError(e));
        }
    }
};

export const deleteComment = (id, comments) => {
    const newComments = [...comments];
    const idComment = newComments.findIndex(c => c.id === id);
    newComments.splice(idComment, 1);
    return async dispatch => {
        dispatch(deleteCommentRequest());
        try {
            await axiosApi.delete(`/comments/${id}`);
            dispatch(deleteCommentSuccess(newComments));
        } catch (e) {
            dispatch(deleteCommentError(e));
        }
    };
};

export const addNewComment = (e, id, comments, comment) => {
    e.preventDefault();
    comment.news_id = id;
    return async dispatch => {
        dispatch(addNewCommentRequest());
        try {
            const response = await axiosApi.post(`/comments`, comment);
            const newComment = [...comments];
            newComment.push(response.data);
            dispatch(addNewCommentSuccess(newComment));
        } catch (e) {
            dispatch(addNewCommentError(e));
        }
    }
}