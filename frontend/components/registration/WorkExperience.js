import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class WorkExperience extends React.Component {
  render() {
    console.log('work experience props', this.props);
    return (
      <div style={{ border: '1px solid black' }} id={this.props.index}>
      Job Title: <input type="text" /> <br />
      Company Name: <input type="text" /> <br />
      Job Description: <textarea rows="4" cols="50" type="text" />
        <button onClick={() => this.props.removeWork(this.props.index)}> Delete </button>
      </div>
    );
  }
}

WorkExperience.propTypes = {
  index: PropTypes.number.isRequired,
  removeWork: PropTypes.func.isRequired,
};

export default withRouter(WorkExperience);
