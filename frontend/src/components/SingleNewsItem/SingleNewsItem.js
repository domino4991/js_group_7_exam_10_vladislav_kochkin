import React from 'react';

const SingleNewsItem = props => {
    return (
        <div className="Single-news">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
};

export default SingleNewsItem;