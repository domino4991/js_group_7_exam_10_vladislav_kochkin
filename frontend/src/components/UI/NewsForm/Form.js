import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postForm} from "../../../store/actions/formActions";

const Form = props => {
    const state = useSelector(state => state.form);
    const dispatch = useDispatch();

    const submitFormHandler = async e => {
        const formData = new FormData();
        Object.keys(state).forEach(item => {
            if(item !== 'error') {
                formData.append(item, state[item]);
            }
        });
        dispatch(postForm(e, formData));
        props.history.replace('/');
    };

    return (
        <form
            className="Add-new-news-form"
            onSubmit={e => submitFormHandler(e)}
        >
            <input
                type="text"
                name="title"
                value={state.title}
                onChange={props.changed}
                placeholder="Enter news title"
                className="Form__field"
            />
            <textarea
                name="body"
                value={state.body}
                onChange={props.changed}
                placeholder="Enter news content"
                className="Form__field"
            />
            <input
                type="file"
                name="image"
                placeholder="Choose file"
                onChange={props.chooseFile}
                className="Form__field"
            />
            <button type="submit" className="Form__btn-send">Send</button>
        </form>
    );
};

export default Form;