import React from 'react';
import {urlApi} from "../../constants";
import './SingleNewsItem.css';
import Moment from "react-moment";
import {BsFillCalendarFill} from 'react-icons/bs';

const SingleNewsItem = props => {
    return (
        <div className="Single-news">
            {props.image && <div className="Single-item__img-box">
                <img
                    src={urlApi + '/uploads/' + props.image}
                    alt={props.title}
                    className="Single-item__img"
                />
            </div>}
            <div className="Single-news__content">
                <h2 className="Single-item__title">{props.title}</h2>
                <p className="Single-item__date"><BsFillCalendarFill /><Moment format="DD.MM.YYYY HH:mm">{props.date}</Moment></p>
                <p className="single-item__content">{props.body}</p>
            </div>
        </div>
    );
};

export default SingleNewsItem;