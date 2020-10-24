import {
    GET_NEWS_ERROR,
    GET_NEWS_ITEM_ERROR,
    GET_NEWS_ITEM_REQUEST, GET_NEWS_ITEM_SUCCESS,
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS
} from "../actionTypes";

const initialState = {
    newsItems: [],
    loading: false,
    error: null,
    newsItem: null
};

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_REQUEST:
        case GET_NEWS_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_NEWS_SUCCESS: {
            return {
                ...state,
                newsItems: action.data,
                loading: false,
                error: null
            };
        }
        case GET_NEWS_ITEM_SUCCESS:
            return {
                ...state,
                newsItem: action.data,
                loading: false,
                error: null
            };
        case GET_NEWS_ERROR:
        case GET_NEWS_ITEM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}