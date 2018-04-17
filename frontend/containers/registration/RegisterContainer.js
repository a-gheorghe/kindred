import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import RegisterBoth from '../../components/registration/RegisterBoth';
import CandidateRegisterEducation from '../../components/registration/CandidateRegisterEducation';
import CandidateRegisterProfileContainer from './CandidateRegisterProfileContainer';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/register" render={props => <RegisterBoth loggedInCand={this.props.loggedInCand} loggedInRef={this.props.loggedInRef} registerRef={this.props.registerRef} registerCand={this.props.registerCand} />} />
        <Route exact path="/register/candidate" component={CandidateRegisterEducation} />
        <Route exact path="/register/candidate/profile" component={CandidateRegisterProfileContainer} />
      </div>
    );
  }
}

export default withRouter(RegisterContainer);
