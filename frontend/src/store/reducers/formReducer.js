import {ADD_FILE, CHANGE_VALUES, POST_FORM_ERROR, POST_FORM_SUCCESS} from "../actionTypes";

const initialState = {
    title: '',
    body: '',
    image: '',
    error: null
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUES:
            return {
                ...state,
                [action.name]: action.value,
                error: null
            };
        case ADD_FILE:
            return {
                ...state,
                [action.name]: action.file
            };
        case POST_FORM_SUCCESS:
            return {
                ...state,
                title: '',
                body: '',
                image: '',
                error: null
            };
        case POST_FORM_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}