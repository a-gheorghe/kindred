import React from 'react';
import PropTypes from 'prop-types';

const Message = props => (
  <div style={{ border: '1px dotted black' }}>
    <label style={{ color: 'red' }} htmlFor={props.name}>
      <span id={props.name}>{props.name}</span>
    </label>
    <br />
    {props.value}
  </div>
);

Message.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Message;
