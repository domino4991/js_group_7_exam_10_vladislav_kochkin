import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/actions/newsActions";
import NewsItem from "../../components/NewsItems/NewsItem";

const Main = () => {
    const {newsItems, loading, error} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return (
        <section className="News">
            {newsItems.map(item => <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                id={item.id}
            />)}
        </section>
    );
};

export default Main;