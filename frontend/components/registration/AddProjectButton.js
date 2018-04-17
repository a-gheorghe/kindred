import React from 'react';
import { withRouter, Route } from 'react-router-dom';

class AddProjectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.addProject}> Add Project </button>
      </div>
    );
  }
}

export default withRouter(AddProjectButton);
