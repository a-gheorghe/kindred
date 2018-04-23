import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CandidateDashboard extends React.Component {
  render() {
    return (
      <div> Candidate Dashboard </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(CandidateDashboard);
