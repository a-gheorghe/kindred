import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class WorkExpForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          Hello I am a form
        </form>
      </div>
    );
  }
}

export default withRouter(WorkExpForm);
