import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import ViewingContainer from './ViewingContainer.js';
import UserContainer from './UserContainer.js';
import '../css/main.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Login from '../components/Login';




class Root extends React.Component {
  // componentWillMount() {
  //   // check if logged in
  // }

  render() {
    // if (this.props.loggedIn === 'pending') {
    //   return <div />;
    // }

    return (
// THIS WORKS
      <Provider store={this.props.store}>
        {/* <Router history={hashHistory}>
          <Route path='/' component={HomePage} />
          <Route path='/login' component={Login} />
        </Router> */}


        <BrowserRouter>
          {/* { this.props.loggedIn ?
            <UserContainer /> : */}
            <ViewingContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

  const mapStateToProps = state => ({
    loggedIn: state.loggedIn
  })

  const mapDispatchToProps = dispatch => ({
    login: () => dispatch({ type: 'LOGIN' }),
    logout: () => dispatch({ type: 'LOGOUT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Root)
