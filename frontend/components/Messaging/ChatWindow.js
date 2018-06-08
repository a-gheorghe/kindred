import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      this.props.updateThread()(this.state.value);

      this.setState({
        value: '',
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.thread.length > 0 ?
          <div>
            <div className="chat-banner">
              <h3>
                {this.props.sendToData.first_name} {this.props.sendToData.last_name}
              </h3>
              <img className="chat-profile-icon" src="../../profileicon.svg" alt="Profile" />
            </div>
            <div className="convo-container">
              {this.props.thread.map(message => (
                <Message
                  name={`${message.first_name} ${message.last_name}`}
                  value={message.message}
                  key={message.message_id}
                  imgUrl={
                    // is the sender a ref? is user a ref?
                    ((this.props.loggedInUser.userType === 'referrer') && (message.referrer_id === this.props.loggedInUser.id)) ||
                    ((this.props.loggedInUser.userType === 'candidate') && (message.candidate_id === this.props.loggedInUser.id))
                    ? this.props.loggedInUser.picture_url : this.props.sendToData.picture_url
                  }
                  isSender={
                    ((this.props.loggedInUser.userType === 'referrer') && (message.referrer_id === this.props.loggedInUser.id)) ||
                    ((this.props.loggedInUser.userType === 'candidate') && (message.candidate_id === this.props.loggedInUser.id))
                  }
                />
              ))}
            </div>
            <form onSubmit={this.handleSubmit}>
              <img src="../../paperclip.svg" alt="Attach" className="icon-msgbar" />
              <img src="../../pictureicon.svg" alt="Upload" className="icon-msgbar" />
              <textarea
                type="text"
                placeholder="Type your message here..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit" className="message-submit">
                <img src="../../plane.svg" alt="send" />
              </button>
            </form>
          </div>
          :
          <div>
            <div className="chat-banner">
              <h3>
                My Inbox
              </h3>
            </div>
            <div className="convo-container">
              <div className="msg-bubble">
                You can choose someone to message by doing a search in the sidebar,
                or from viewing someone's profile and clicking "Message Me".
              </div>
            </div>
            <form>
              <img src="../../paperclip.svg" alt="Attach" className="icon-msgbar" />
              <img src="../../pictureicon.svg" alt="Upload" className="icon-msgbar" />
              <textarea
                disabled
                type="text"
                placeholder="Select someone to send a message to..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button disabled className="message-submit">
                <img src="../../plane.svg" alt="send" />
              </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

ChatWindow.propTypes = {
  sendToId: PropTypes.string.isRequired,
  loggedInUser: PropTypes.object.isRequired,
  sendToData: PropTypes.object.isRequired,
  thread: PropTypes.array,
  updateThread: PropTypes.func.isRequired,
};

ChatWindow.defaultProps = {
  thread: [],
};

export default ChatWindow;
