import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ReferrerProfileEditable extends React.Component {
  componentWillMount() {
    // make fetch request to back end to make sure user is logged in and retrieve
    // profile data; add to state

  }

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
      referrerProfile: {},
    };
  }

  modalOpen() {
    this.setState({modalOpen: true});
  }

  modalClose() {
    this.setState({modalOpen: false});
  }

  render() {
    return (
      <div>
        This is the referrer&apos;s profile
      </div>
    );
  }
};

export default withRouter(ReferrerProfileEditable);
