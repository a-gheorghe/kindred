import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const unlimitedHeightStyles = {
  width: '1200px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const limitedHeightStyles = {
  width: '1200px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
};

class Container2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div
        style={this.props.unlimitedHeight ? unlimitedHeightStyles : limitedHeightStyles}
      >
        {this.props.children}
      </div>
    );
  }
}

Container2.propTypes = {
  unlimitedHeight: PropTypes.bool,
};

Container2.defaultProps = {
  unlimitedHeight: false,
};

export default withRouter(Container2);
