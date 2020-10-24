import React from 'react';
import './CommentsForm.css';

const CommentsForm = props => {
    return (
        <form className="Comments-form" onSubmit={props.submited}>
            <h3 className="Comments-form__title">Add comment</h3>
            <input
                type="text"
                name="author"
                value={props.author}
                onChange={props.changed}
                placeholder="Enter your name"
                className="Comments-form__field"
            />
            <textarea
                name="comment"
                placeholder="Enter your comment"
                className="Comments-form__field Comments-form__text"
                value={props.comment}
                onChange={props.changed}
            />
            <button type="submit" className="Comments-form__btn-send">Add</button>
        </form>
    );
};

export default CommentsForm;