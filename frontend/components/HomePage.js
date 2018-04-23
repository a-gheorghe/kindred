import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div> Homepage </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(HomePage);
