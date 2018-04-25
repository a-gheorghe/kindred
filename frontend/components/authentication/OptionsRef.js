import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

const OptionsRef = props => (
  <div>
    <AuthButton loggedInRef={props.loggedInRef} logoutRef={props.logoutRef} />
    {/* Href attribute linter errors can be ignored. */}
    <Link to="/ref/profileRef"> My Profile </Link> <br />
    <Link to="/ref/messages"> Messages </Link> <br />
    <Link to="/ref/allCandidates"> See All Candidates </Link><br />
    <Link to="/ref/referrals"> Given Referrals </Link><br />
    <Link to="/ref/jobListings"> Manage My Job Listings</Link><br />
  </div>
);

OptionsRef.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
};

export default OptionsRef;
