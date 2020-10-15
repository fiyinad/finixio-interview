import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import RootReducer from './reducers/index';

export default function configureStore() {
    return process.env.NODE_ENV === 'development'
    ? createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
    : createStore(RootReducer, applyMiddleware(thunk));
}