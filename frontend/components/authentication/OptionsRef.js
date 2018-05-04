import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import '../styles/styles.css';

class OptionsRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsClass: 'nav-drop-closed',
    };
  }

  toggleSettings() {
    this.setState({
      settingsClass: this.state.settingsClass === 'nav-drop-opened' ? 'nav-drop-closed' : 'nav-drop-opened',
    });
  }

  render() {
    return (
      <div className="topnav" role="navigation">
        <div className="logo">
          KindredTalent
        </div>
        <div className="aTag">
          <Link className="aTagLink" to="/ref/allCandidates"> View Candidates </Link><br />
          <Link className="aTagLink" to="/ref/messages"> My Messages </Link> <br />
          <Link className="aTagLink" to="/ref/my/profile"> My Profile </Link> <br />
          <div className="nav-dropdown">
            <span
              className="aTagLink"
              onKeyPress={() => this.toggleSettings()}
              onClick={() => this.toggleSettings()}
              role="link"
              tabIndex={0}
            >
              Settings v
            </span><br />
            <div className={`nav-drop-content ${this.state.settingsClass}`}>
              <Link to="/ref/referrals"> My Referrals </Link><br />
              <Link to="/ref/jobListings"> My Job Listings</Link><br />
            </div>
          </div>
          <AuthButton loggedInRef={this.props.loggedInRef} logoutRef={this.props.logoutRef} />
        </div>
      </div>
    );
  }
}

OptionsRef.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
  logoutRef: PropTypes.func.isRequired,
};

export default OptionsRef;
