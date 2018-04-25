import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    };
  }

  render() {
    return (
      <div className="topnav">
        <div className="logo">
          KindredTalent
        </div>
        <div className="aTag">
          <a href="/candidate">I&#39;m Looking</a>
          <a href="/">I&#39;m Referring</a>
          <a href="/app/register">Sign Up</a>
          <a href="/app/login">Login</a>
        </div>
      </div>
    );
  };
}

export default withRouter(Header);
