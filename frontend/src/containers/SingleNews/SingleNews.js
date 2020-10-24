import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNewsItem} from "../../store/actions/newsActions";

const SingleNews = props => {
    console.log(props);
    const {newsItem, loading, error} = useSelector(state => state.news);
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getNewsItem(id));
    }, [dispatch, id]);

    return (
        <section className="Single-news-page">
            {newsItem && <SingleNews
                title={newsItem.title}
                date={newsItem.date}
            />}
        </section>
    );
};

export default SingleNews;