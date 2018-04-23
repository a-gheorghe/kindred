import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class EmployeeDashboard extends React.Component {
  render() {
    return (
      <div> EmployeeDashboard </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(EmployeeDashboard);
