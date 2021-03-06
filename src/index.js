import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import productsReducer from './store/reducers/products';
import shopCartReducer from './store/reducers/shopCart';
import clientsReducer from './store/reducers/clients';
import userReducer from './store/reducers/user';
import usersReducer from './store/reducers/users';
import ordersReducer from './store/reducers/orders';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ : null) || compose;

const rootReducer = combineReducers({
    products: productsReducer,
    shopCart: shopCartReducer,
    clients: clientsReducer,
    user: userReducer,
    users: usersReducer,
    orders: ordersReducer
});

const store = createStore(rootReducer, composeEnhancers());

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
