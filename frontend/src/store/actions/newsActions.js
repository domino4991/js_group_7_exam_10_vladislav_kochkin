import {
    DELETE_NEWS_ITEM_ERROR,
    DELETE_NEWS_ITEM_REQUEST,
    GET_NEWS_ERROR, GET_NEWS_ITEM_ERROR,
    GET_NEWS_ITEM_REQUEST,
    GET_NEWS_ITEM_SUCCESS,
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS
} from "../actionTypes";
import {axiosApi} from "../../axiosApi";

const getNewsRequest = () => ({type: GET_NEWS_REQUEST});
const getNewsSuccess = data => ({type: GET_NEWS_SUCCESS, data});
const getNewsError = error => ({type: GET_NEWS_ERROR, error});
const getNewsItemRequest = () => ({type: GET_NEWS_ITEM_REQUEST});
const getNewsItemSuccess = data => ({type: GET_NEWS_ITEM_SUCCESS, data});
const getNewsItemError = error => ({type: GET_NEWS_ITEM_ERROR, error});
const deleteNewsRequest = () => ({type: DELETE_NEWS_ITEM_REQUEST});
const deleteNewsError = error => ({type: DELETE_NEWS_ITEM_ERROR, error});

export const getNews = () => {
    return async dispatch => {
        dispatch(getNewsRequest());
        try {
            const response = await axiosApi.get('/news');
            dispatch(getNewsSuccess(response.data));
        } catch (e) {
            dispatch(getNewsError(e));
        }
    };
};

export const getNewsItem = id => {
    return async dispatch => {
        dispatch(getNewsItemRequest());
        try {
            const response = await axiosApi.get(`/news/${id}`);
            dispatch(getNewsItemSuccess(response.data));
        } catch (e) {
            dispatch(getNewsItemError(e));
        }
    };
};

export const deleteNewsItem = id => {
    return async dispatch => {
        dispatch(deleteNewsRequest());
        try {
            await axiosApi.delete(`/news/${id}`);
            dispatch(getNews());
        } catch (e) {
            dispatch(deleteNewsError(e));
        }
    }
}

