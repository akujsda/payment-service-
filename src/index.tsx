import React from 'react';
import './App.css';
import App from './App';
import {Router} from 'react-router';
import {render} from 'react-dom';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();

render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('root'),
);


