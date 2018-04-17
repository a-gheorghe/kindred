import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class DeleteIndivExpButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button> Delete Experience </button>
      </div>
    );
  }
}

export default withRouter(DeleteIndivExpButton);
