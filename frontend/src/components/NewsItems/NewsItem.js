import React from 'react';
import './NewsItems.css';
import {NavLink} from "react-router-dom";
import {urlApi} from "../../constants";
import {BsFillCalendarFill} from 'react-icons/bs';
import Moment from "react-moment";

const NewsItem = props => {
    return (
        <div className="News-item">
            {props.image && <div className="News-item__img-box">
                <img
                    src={urlApi + '/uploads/' + props.image}
                    alt={props.title}
                    className="News-item__img"
                />
            </div>}
            <div className="News-item__content">
                <h3 className="News-item__title">{props.title}</h3>
                <div className="News-item__footer">
                    <p className="News-item__date"><BsFillCalendarFill /> <Moment format="DD.MM.YYYY HH:mm">{props.date}</Moment></p>
                    <NavLink to={`/news/${props.id}`} className="News-link">Read full post</NavLink>
                    <button type="button" className="News-item__del" onClick={props.clicked}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;