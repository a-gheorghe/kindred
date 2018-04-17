import React from 'react';
import { withRouter, Route } from 'react-router-dom';

class AddWorkButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button> Add Work </button>
      </div>
    );
  }
}

export default withRouter(AddWorkButton);
