import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ReferrerProfileEditable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
      refProfile: {},
    };
  }

  componentDidMount() {
    // make fetch request to back end to make sure user is logged in and retrieve
    // profile data; add to state
    this.props.checkAuthRef()
      .then((resp) => {
        console.log('after checkAuthRef...');
        console.log(resp);
        this.setState({ refProfile: resp });
      })
      .catch((err) => {
        console.log('after checkAuthRef...');
        console.log(err);
      });
  }

  modalOpen() {
    this.setState({ modalOpen: true });
  }

  modalClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Company: {this.state.refProfile.company}</li>
          <li>Fname: {this.state.refProfile.first_name}</li>
          <li>Lname: {this.state.refProfile.last_name}</li>
          <li>Title: {this.state.refProfile.title}</li>
          <li>Email: {this.state.refProfile.email}</li>
          <li>Picture: {this.state.refProfile.picture_url}</li>
          <li>LinkedIn: {this.state.refProfile.linkedIn_url}</li>
        </ul>
      </div>
    );
  }
}

ReferrerProfileEditable.propTypes = {
  checkAuthRef: PropTypes.func.isRequired,
};

export default withRouter(ReferrerProfileEditable);
