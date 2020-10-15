import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './containers/home/index';

const browserHistory = createBrowserHistory();

const app = props => {
    return (
        <Router history={browserHistory}>
            <Home />
        </Router>
    );
}

export default app;