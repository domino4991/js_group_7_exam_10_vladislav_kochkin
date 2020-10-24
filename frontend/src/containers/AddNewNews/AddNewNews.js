import React from 'react';
import Form from "../../components/UI/NewsForm/Form";
import {useDispatch} from "react-redux";
import {addFile, changeValues} from "../../store/actions/formActions";

const AddNewNews = props => {
    const dispatch = useDispatch();
    return (
        <section className="Add-new-news-page">
            <h2 style={{textAlign: 'center'}}>Add new news</h2>
            <Form
                changed={e => dispatch(changeValues(e))}
                chooseFile={e => dispatch(addFile(e))}
                history={props.history}
            />
        </section>
    );
};

export default AddNewNews;