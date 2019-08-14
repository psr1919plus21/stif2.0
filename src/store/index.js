import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import syncReduxWithLocalstorage from 'sync-redux-with-localstorage';

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, syncReduxWithLocalstorage('channels'))),
);
