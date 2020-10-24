import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNewsItem} from "../../store/actions/newsActions";
import SingleNewsItem from "../../components/SingleNewsItem/SingleNewsItem";
import Comments from "../Comments/Comments";
import './SingleNews.css';
import Spinner from "../../components/UI/Spinner/Spinner";

const SingleNews = props => {
    const {newsItem, loading, error} = useSelector(state => state.news);
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getNewsItem(id));
    }, [dispatch, id]);

    return (
        <section className="Single-news-page">
            {loading && <Spinner />}
            {error ? <h3>{error}</h3> : newsItem ? <SingleNewsItem
                title={newsItem.title}
                body={newsItem.body}
                date={newsItem.date}
                image={newsItem.image}
            /> : <h1>404 not found</h1>}
            <Comments
                id={id}
            />
        </section>
    );
};

export default SingleNews;