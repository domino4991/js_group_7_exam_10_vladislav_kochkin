import React from 'react';

const CommentItem = props => {
    return (
        <div className="Comment">
            <h4>{props.author}</h4>
            <p>{props.comment}</p>
            <button type="button" className="Comment__del-btn" onClick={props.clicked}>Delete</button>
        </div>
    );
};

export default CommentItem;