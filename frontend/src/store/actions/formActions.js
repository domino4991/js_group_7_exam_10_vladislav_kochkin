import {ADD_FILE, CHANGE_VALUES, POST_FORM_ERROR, POST_FORM_REQUEST, POST_FORM_SUCCESS} from "../actionTypes";
import {axiosApi} from "../../axiosApi";
import {getNews} from "./newsActions";

export const changeValues = e => ({type: CHANGE_VALUES, name: e.target.name, value: e.target.value});
export const addFile = e => ({type: ADD_FILE, name: e.target.name, file: e.target.files[0]});

const postFormRequest = () => ({type: POST_FORM_REQUEST});
const postFormSuccess = () => ({type: POST_FORM_SUCCESS});
const postFormError = error => ({type: POST_FORM_ERROR, error});

export const postForm = (e, news) => {
    e.preventDefault();
    console.log(news);
    return async dispatch => {
        dispatch(postFormRequest());
        try {
            await axiosApi.post(`/news/`, news);
            dispatch(postFormSuccess());
            dispatch(getNews());
        } catch (e) {
            dispatch(postFormError(e));
        }
    };
};