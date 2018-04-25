import React from 'react';
import PropTypes from 'prop-types';

const SelectThread = props => (
  <div
    onClick={(id) => {
      console.log('id', id);
      props.activateThread(id);
    }}
    onKeyPress={(id) => {
      console.log('id2', id);
      props.activateThread(id);
    }}
    role="button"
    tabIndex={0}
    key={props.candId}
  >
    { props.imgUrl ? <img src={props.imgUrl} alt={props.name} /> : null }
    <h3>{props.name}</h3>
    <h4>{props.role}</h4>
    { props.active ? <p>** ACTIVE **</p> : null}
  </div>
);

SelectThread.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  // prop type fluctuates between string and number... figure out how to fix
  candId: PropTypes.string.isRequired,
  activateThread: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

SelectThread.defaultProps = {
  imgUrl: null,
  active: false,
};

export default SelectThread;
