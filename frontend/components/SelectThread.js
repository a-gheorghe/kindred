import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles/styles.css';

const SelectThread = props => (
  <div
    className={props.active ? 'select-thread active-thread' : 'select-thread'}
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
    { props.imgUrl ? <img className="thread-profile-pic" src={props.imgUrl} alt={props.name} /> : null }
    <div>
      <h3>{props.name}</h3>
      <h4>{props.role}</h4>
    </div>
    <span className="thread-update-time">5:21 pm</span>
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
