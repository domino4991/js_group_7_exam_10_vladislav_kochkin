import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {newsReducer} from "./store/reducers/newsReducer";
import {commentsReducer} from "./store/reducers/commentsReducer";
import {formReducer} from "./store/reducers/formReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    news: newsReducer,
    comments: commentsReducer,
    form: formReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
