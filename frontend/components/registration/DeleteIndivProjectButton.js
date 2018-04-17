import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class DeleteIndivProjectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.removeProject}> Delete Project </button>
      </div>
    );
  }
}

export default withRouter(DeleteIndivProjectButton);
