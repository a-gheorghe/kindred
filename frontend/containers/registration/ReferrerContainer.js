import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrivateRouteRef from '../../components/authentication/PrivateRouteRef';
import AllCandidates from '../../components/AllCandidates';
import ReferralProfile from '../../components/ReferralProfile';
import ReferrerProfileEditable from '../../components/ReferrerProfileEditable';
import GivenReferrals from '../../components/GivenReferrals';
import MessageContainer from '../../components/MessageContainer';
import RefJobListings from '../../components/RefJobListings';
import OptionsRef from '../../components/authentication/OptionsRef';
import Footer from '../../components/Footer';
import Pending from '../../components/Pending';

const ReferrerContainer = props => (
  <div>
    <OptionsRef loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
    <Switch>
      {/* Renders a referrer's message portal */}
      <PrivateRouteRef
        exact
        path="/ref/messages"
        component={MessageContainer}
        logout={props.logoutRef}
        loggedInRef={props.loggedInRef}
        setTarget={props.setTarget}
        checkAuth={props.checkAuthRef}
      />
      {/* Renders profile of referrer */}
      <PrivateRouteRef
        exact
        path="/ref/profileRef"
        component={ReferralProfile}
        loggedInRef={props.loggedInRef}
        logoutRef={props.logoutRef}
      />
      {/* Renders list of all candidates for referrer viewing */}
      <PrivateRouteRef
        exact
        path="/ref/allCandidates"
        component={AllCandidates}
        loggedInRef={props.loggedInRef}
        logoutRef={props.logoutRef}
      />
      {/* Renders profile of referrer */}
      <PrivateRouteRef
        exact
        path="/ref/referrals"
        component={GivenReferrals}
        loggedInRef={props.loggedInRef}
        logoutRef={props.logoutRef}
      />
      {/* Renders form that allows referrers to post jobs */}
      <PrivateRouteRef
        exact
        path="/ref/jobListings"
        component={RefJobListings}
        loggedInRef={props.loggedInRef}
        logoutRef={props.logoutRef}
      />
      <PrivateRouteRef
        exact
        path="/ref/my/profile"
        component={ReferrerProfileEditable}
        loggedInRef={props.loggedInRef}
        logoutRef={props.logoutRef}
        checkAuthRef={props.checkAuthRef}
      />
    </Switch>
    <Footer />
  </div>
);

ReferrerContainer.propTypes = {
  setTarget: PropTypes.func.isRequired,
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
  checkAuthRef: PropTypes.func.isRequired,
};

export default withRouter(ReferrerContainer);
