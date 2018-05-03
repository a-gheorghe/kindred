import React from 'react';
import { withRouter } from 'react-router-dom';

import PrivateRouteCand from '../../components/authentication/PrivateRouteCand';
import ReceivedReferrals from '../../components/ReceivedReferrals';
import MessageThread from '../../components/MessageThread';
import CandidateExternalProfile from '../../components/CandidateExternalProfile'
import CandidateSelfProfile from '../../components/CandidateSelfProfile';
import Pending from '../../components/Pending';

class CandidateContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`candidate container props`, this.props)
    return (
      <div>
        {/* Renders messages for candidiate */}
        <PrivateRouteCand
          exact
          path="/cand/messages"
          component={MessageThread}
          logoutCand={this.props.logoutCand}
          loggedInCand={this.props.loggedInCand}
          setTarget={this.props.setTarget}
          target={this.props.target}
        />
        {/* Renders profile of candidate from own view */}
        <PrivateRouteCand
          exact
          path="/cand/selfprofile"
          component={CandidateSelfProfile}
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        {/* Renders listing of referrals received by candidate */}
        <PrivateRouteCand
          exact
          path="/cand/referrals"
          component={ReceivedReferrals}
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        {/* Renders external view of profile */}
        <PrivateRouteCand
          exact
          path="/cand/extprofile"
          component={CandidateExternalProfile}
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        {/* Renders pending form after candidate registers */}
        {/* <PrivateRouteCand
          exact
          path="/cand/pending"
          component={Pending}
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        /> */}

      </div>
    );
  }
}

export default withRouter(CandidateContainer);
