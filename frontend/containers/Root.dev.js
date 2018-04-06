import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import PropTypes from 'prop-types';
import AppContainer from './AppContainer';
import SharedLogin from './SharedLogin';
import HomePage from './HomePage';


export default function Root({ store }) {
  const history = syncHistoryWithStore(browserHistory, store);
    return (
        <Provider store={store}>
            <div>
              <Router history={history}>
                <Route path='/' component={AppContainer}>
                  <Route path='/login' component={SharedLogin}/>
                  <Route path='/home' component={HomePage}/>
               </Route>
             </Router>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
