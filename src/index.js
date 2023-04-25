import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer1 from './reducers/reducer1'
import 'bootstrap/dist/css/bootstrap.css'

const store1 = createStore(Reducer1)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store1}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
