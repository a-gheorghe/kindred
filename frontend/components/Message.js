import React from 'react';
import PropTypes from 'prop-types';

const Message = props => (
  <div className={props.isSender ? 'right-msg' : 'left-msg'}>
    { // If from sender, display on the right
      props.isSender ?
        <div>
          <div className="msg-bubble">
            {props.value}
          </div>
          <img
            className="msg-img"
            alt={props.name}
            src={props.imgUrl ||
              'http://wp0.vanderbilt.edu/blackboard/wp-content/uploads/sites/71/2015/08/profile-42914_12801-150x150.png'}
          />
        </div>
      : // otherwise display on left
        <div>
          <img
            className="msg-img"
            alt={props.name}
            src={props.imgUrl ||
              'http://wp0.vanderbilt.edu/blackboard/wp-content/uploads/sites/71/2015/08/profile-42914_12801-150x150.png'}
          />
          <div className="msg-bubble">
            {props.value}
          </div>
        </div>
    }
  </div>
);

Message.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isSender: PropTypes.string.isRequired,
};

export default Message;
