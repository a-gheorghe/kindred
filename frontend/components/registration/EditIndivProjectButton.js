import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class EditIndivProjectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button> Edit Project </button>
      </div>
    );
  }
}

export default withRouter(EditIndivProjectButton);
