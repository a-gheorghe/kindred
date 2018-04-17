import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class EditIndivExpButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button> Edit Experience </button>
      </div>
    );
  }
}

export default withRouter(EditIndivExpButton);
