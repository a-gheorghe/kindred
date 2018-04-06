import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import '../components/styles/view.css';


const ViewingContainer = () => {
  return (
    <div>
        {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch> */}
    hello
    </div>
  )
}


        {/* This works
        <BrowserRouter>
            <Route exact path="/" component={HomePage} />
        </BrowserRouter> */}




export default ViewingContainer;
