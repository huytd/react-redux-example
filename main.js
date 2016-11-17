import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import newsFilter from './reducers/newsFilter';
import App from './components/App';

let store = createStore(newsFilter);
console.log('Created store');

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
