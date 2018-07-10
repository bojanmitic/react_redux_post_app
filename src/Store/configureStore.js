import { createStore } from 'redux';
import postsReducer from '../Reducers/postReducer';


export const store = createStore(
    postsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
