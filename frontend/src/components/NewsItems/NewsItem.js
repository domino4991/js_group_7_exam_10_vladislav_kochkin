import React from 'react';
import './NewsItems.css';
import {NavLink} from "react-router-dom";

const NewsItem = props => {
    return (
        <div className="News-item">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <NavLink to={`/news/${props.id}`} className="News-link">Read full post</NavLink>
        </div>
    );
};

export default NewsItem;