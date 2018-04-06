import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import CandidateDashboard from '../components/CandidateDashboard';
import EmployeeDashboard from '../components/EmployeeDashboard';
import NoAccess from '../components/NoAccess';
import '../components/styles/user.css';

const UserContainer = () => {
  return (
    <div>
      <Switch>
        <Route path='/denied' exact component={NoAccess} />
        <Route path='/employeedash' exact component={EmployeeDashboard} />
        <Route path='/candidatedash' exact component={CandidateDashboard} />
      </Switch>
    </div>
  );
}

export default UserContainer;
