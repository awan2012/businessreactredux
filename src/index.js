import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { loadAbouts } from './actions/aboutActions';
import { loadServices } from './actions/serviceActions';
import { loadBlogs } from './actions/blogActions';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './store/configureStore';
const store = configureStore();
store.dispatch(loadAbouts());
store.dispatch(loadServices());
store.dispatch(loadBlogs());
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" name="Home" component={App} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));
