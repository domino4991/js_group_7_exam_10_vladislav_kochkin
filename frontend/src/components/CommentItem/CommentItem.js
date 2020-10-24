import React from 'react';
import './CommentItem.css';
import {AiFillDelete} from 'react-icons/ai';
import {GiNinjaHead} from 'react-icons/gi';
import {FaUserAlt} from 'react-icons/fa';

const CommentItem = props => {
    return (
        <div className="Comment">
            <h4
                className="Comment__author"
            >
                {props.author === 'Anonymous' ? <GiNinjaHead /> : <FaUserAlt />}
                {props.author}:
            </h4>
            <p className="Comment__text">{props.comment}</p>
            <button
                type="button"
                className="Comment__del-btn"
                onClick={props.clicked}
            >
                <AiFillDelete />
            </button>
        </div>
    );
};

export default CommentItem;