import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

class OptionsCand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('this.props in options cand', this.props);
    return (
      <div className="topnav">
        <div className="logo">
          KindredTalent
        </div>
        <div className="aTag">
          <Link className="aTagLink" to="/cand/messages"> Messages </Link> <br />
          <Link to="/cand/selfprofile"> Profile </Link><br />
          <Link to="/cand/settings"> Settings</Link><br />
          <AuthButton loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand} />
          <br />
        </div>
        {/* Href attribute linter errors can be ignored. */}
      </div>
    );
  }
}

OptionsCand.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default OptionsCand;
