import {
    ADD_NEW_COMMENT_ERROR,
    ADD_NEW_COMMENT_REQUEST, ADD_NEW_COMMENT_SUCCESS, CHANGE_VALUE_COMMENT,
    DELETE_COMMENT_ERROR,
    DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS,
    GET_COMMENTS_ERROR,
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS
} from "../actionTypes";

const initialState = {
    comments: [],
    loading: false,
    error: null,
    comment: {
        author: '',
        comment: ''
    }
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
        case DELETE_COMMENT_REQUEST:
        case ADD_NEW_COMMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.data,
                loading: false,
                error: null
            };
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                comments: action.data
            };
        case ADD_NEW_COMMENT_SUCCESS:
            return {
                ...state,
                comment: {
                    author: '',
                    comment: ''
                },
                loading: false,
                error: null,
                comments: action.data
            };
        case CHANGE_VALUE_COMMENT:
            return {
                ...state,
                comment: {
                    ...state.comment,
                    [action.name]: action.value
                }
            };
        case GET_COMMENTS_ERROR:
        case DELETE_COMMENT_ERROR:
        case ADD_NEW_COMMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};