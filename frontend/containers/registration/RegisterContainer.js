import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import RegisterBoth from '../../components/registration/RegisterBoth';
import CandidateRegisterEducation from '../../components/registration/CandidateRegisterEducation';
import CandidateProfileContainer from './CandidateProfileContainer';
import CandidateRegisterAdditional from '../../components/registration/CandidateRegisterAdditional';
import PrivateRouteCand from '../../components/authentication/PrivateRouteCand';
import Pending from '../../components/Pending';

const RegisterContainer = props => (
  <div>
    <Route
      exact
      path="/register"
      render={() =>
      (<RegisterBoth
        loggedInCand={props.loggedInCand}
        loggedInRef={props.loggedInRef}
        registerCand={props.registerCand}
        registerRef={props.registerRef}
        loginRef={props.loginRef}
      />)}
    />
    <Route
      exact
      path="/register/cand/education"
      render={() =>
        (<CandidateRegisterEducation
          loggedInCand={props.loggedInCand}
          registerCand={props.registerCand}
        />)}
    />
    <Route
      exact
      path="/register/cand/profile"
      render={() =>
        (<CandidateProfileContainer
          loggedInCand={props.loggedInCand}
          registerCand={props.registerCand}
        />)}
    />
    <Route
      exact
      path="/register/cand/additional"
      render={() =>
        (<CandidateRegisterAdditional
          loggedInCand={props.loggedInCand}
          registerCand={props.registerCand}
        />)}
    />
    <PrivateRouteCand
      exact
      path="/register/cand/pending"
      component={Pending}
      loggedInCand={props.loggedInCand}
      registerCand={props.registerCand}
    />
  </div>
);

RegisterContainer.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  loggedInCand: PropTypes.bool.isRequired,
  registerRef: PropTypes.func.isRequired,
  registerCand: PropTypes.func.isRequired,
  loginRef: PropTypes.func.isRequired,
};

export default withRouter(RegisterContainer);
