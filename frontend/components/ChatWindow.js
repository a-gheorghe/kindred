import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.retrieveMessageThreads = this.retrieveMessageThreads.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateThread()(this.state.value);
    // console.log()
    console.log('updateThread');
    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <div>
        {this.props.thread.length > 0 ?
          <div>
            {this.props.thread.map(message => (
              <Message
                name={`${message.first_name} ${message.last_name}`}
                value={message.message}
                key={message.message_id}
              />
            ))}
            <form onSubmit={this.handleSubmit}>
              <textarea
                type="text"
                placeholder="Type your message here..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input type="submit" value="Send message" />
            </form>
          </div>
          :
          <div>
            <p>You have no messages from {this.props.candId}</p>
            <textarea placeholder="Click a candidate to start a conversation" disabled />
          </div>
        }
      </div>
    );
  }
};

ChatWindow.propTypes = {
  candId: PropTypes.string,
  candData: PropTypes.object,
  thread: PropTypes.array,
  updateThread: PropTypes.func.isRequired,
};

ChatWindow.defaultProps = {
  candId: null,
  candData: null,
  thread: [],
};

export default ChatWindow;
