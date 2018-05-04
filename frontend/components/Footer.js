import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="footer">
        <div className="footerDiv">
          <a style={{ marginRight: '20px' }} className="footerA" href="#">Terms of Service</a>
          <a className="footerA" href="#">Privacy</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
