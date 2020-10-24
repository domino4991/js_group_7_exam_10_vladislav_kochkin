import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteNewsItem, getNews} from "../../store/actions/newsActions";
import NewsItem from "../../components/NewsItems/NewsItem";
import './Main.css';
import Spinner from "../../components/UI/Spinner/Spinner";

const Main = () => {
    const {newsItems, loading, error} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return (
        <section className="News">
            {loading && <Spinner />}
            <h2 style={{textAlign: 'center', borderBottom: '1px solid #263238', paddingBottom: '20px'}}>Posts</h2>
            {error ?
                <h1>{error}</h1>
                :
                newsItems.map(item => <NewsItem
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    image={item.image}
                    id={item.id}
                    clicked={() => dispatch(deleteNewsItem(item.id))}
                />).reverse()}
        </section>
    );
};

export default Main;