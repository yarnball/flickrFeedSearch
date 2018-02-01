import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './store'
import { createStore, applyMiddleware } from 'redux'
// Apply middleware is for redux-thunk
import thunk from 'redux-thunk';
import App from './App'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))


ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));
