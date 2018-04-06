import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class NoAccess extends React.Component {

  render() {
    return (
      <div> No access </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(NoAccess);
