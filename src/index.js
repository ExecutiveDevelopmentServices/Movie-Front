import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {AuthenticationReducer} from './reducer';
import { reducer as formReducer } from 'redux-form'

import App from './components/App';

const middlewares = [ReduxThunk];
const Enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    AuthenticationReducer,
    form: formReducer
});
const store = createStore(reducers, Enhancers(applyMiddleware(...middlewares)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
