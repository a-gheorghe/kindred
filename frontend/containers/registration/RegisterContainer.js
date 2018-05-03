import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import RegisterBoth from '../../components/registration/RegisterBoth';
import CandidateRegisterEducation from '../../components/registration/CandidateRegisterEducation';
import CandidateProfileContainer from './CandidateProfileContainer';
import CandidateRegisterAdditional from '../../components/registration/CandidateRegisterAdditional';
import PrivateRouteCand from '../../components/authentication/PrivateRouteCand';
import Pending from '../../components/Pending';

class RegisterContainer extends React.Component {
  render() {
    console.log('REGISTER CONTAINER', this.props);
    return (
      <div>
        <Route exact path="/register" render={props => <RegisterBoth loggedInCand={this.props.loggedInCand} loggedInRef={this.props.loggedInRef} registerRef={this.props.registerRef} registerCand={this.props.registerCand} />} />
        <Route exact path="/register/cand/education" render={props => <CandidateRegisterEducation loggedInCand={this.props.loggedInCand} registerCand={this.props.registerCand} />} />
        <Route exact path="/register/cand/profile" render={props => <CandidateProfileContainer loggedInCand={this.props.loggedInCand} registerCand={this.props.registerCand} />} />
        <Route exact path="/register/cand/additional" render={props => <CandidateRegisterAdditional loggedInCand={this.props.loggedInCand} registerCand={this.props.registerCand} />} />
        <PrivateRouteCand
          exact
          path="/register/cand/pending"
          component={Pending}
          loggedInCand={this.props.loggedInCand}
          registerCand={this.props.registerCand}
        />
      </div>
    );
  }
}


export default withRouter(RegisterContainer);
