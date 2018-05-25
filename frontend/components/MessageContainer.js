import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import SelectThread from './SelectThread';
import ChatWindow from './ChatWindow';
import ChatBio from './ChatBio';
import '../components/styles/styles.css';

let msgId = 5;

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // currently logged in user's data; can be referrer or candidate
      user: null,
      // search query for sidebar
      query: '',
      // candidate/referrer id of active thread
      activeThreadId: null,
      // current thread of messages between the logged in user and the
      // user with id represented by activeThreadId
      activeThread: [],
      // the user data for each user the current user has a message thread with
      messageThreadData: {
        // key is candidate_id if logged in as referrer
        // OR referrer_id if logged in as candidate
        1: {
          first_name: 'Bob',
          last_name: 'Test',
          email: 'bob@example.com',
          role: 'Wells Fargo',
          picture_url: 'http://hanko-seal.com/wp-content/uploads/2018/05/Japanese-business-man-150x150.jpeg',
          location: 'Omaha, NE',
          linkedin_url: 'https://www.linkedin.com/',
          github_url: 'https://www.github.com/',
          website_url: 'https://www.reddit.com/',
          resume_url: 'https://www.lol.com/',
          education_id: 1,
          work_experience_id: 1,
          project_id: 1,
        },
        2: {
          first_name: 'Jane',
          last_name: 'Test',
          email: 'Jane@example.com',
          role: 'AirBnB',
          picture_url: 'http://trovehairstyles.com/wp-content/uploads/2016/08/blonde-peek-a-boo-highlights-on-brown-hair-good-for-round-faced-person-150x150.jpg',
          location: 'San Francisco, CA',
          linkedin_url: 'https://www.linkedin.com/',
          github_url: 'https://www.github.com/',
          website_url: 'https://www.reddit.com/',
          resume_url: 'https://www.lol.com/',
          education_id: 2,
          work_experience_id: 2,
          project_id: 2,
        },
      },
    };

    this.addMessageToThread = this.addMessageToThread.bind(this);
  }

  componentDidMount() {
    // Check to see if accessing as referrer or candidate
    this.props.checkAuth()
      .then((resp) => {
        console.log('resp from checkAuth', resp);
        this.setState({ user: resp });
      })
      .catch(err => console.log("couldn't authenticate referrer"));
  }

  makeThreadActive(userId) {
    // takes in the userId of the referrer or candidate the current user is talking to
    this.setState({
      activeThreadId: userId,
    });

    if (userId == 1) { // TODO: Replace this with real data
      this.setState({
        activeThread:
        [
          // from recruiter
          {
            message_id: 1,
            referrer_id: this.state.user.userType === 'referrer' ? this.state.user.id : null,
            candidate_id: this.state.user.userType === 'candidate' ? null : this.state.user.id,
            first_name: this.state.user.userType === 'referrer' ? this.state.user.first_name : 'Bob',
            last_name: this.state.user.userType === 'referrer' ? this.state.user.last_name : 'Test',
            message: `Hi ${this.state.user.userType === 'referrer' ? 'Bob' : this.state.user.first_name}, we are looking for a React developer. Would you be interested?`,
          },
          // from candidate
          {
            message_id: 2,
            referrer_id: this.state.user.userType === 'referrer' ? null : this.state.user.id,
            candidate_id: this.state.user.userType === 'candidate' ? this.state.user.id : null,
            first_name: this.state.user.userType === 'candidate' ? this.state.user.first_name : 'Bob',
            last_name: this.state.user.userType === 'candidate' ? this.state.user.last_name : 'Bob',
            message: `Hi ${this.state.user.userType === 'referrer' ? this.state.user.first_name : 'Bob'}, yes I am. Could you give me more details about this job position?`,
          },
          {
            message_id: 3,
            referrer_id: this.state.user.userType === 'referrer' ? this.state.user.id : null,
            candidate_id: this.state.user.userType === 'candidate' ? null : this.state.user.id,
            first_name: this.state.user.userType === 'referrer' ? this.state.user.first_name : 'Bob',
            last_name: this.state.user.userType === 'referrer' ? this.state.user.last_name : 'Test',
            message: 'Of course! Well, we are building this amazing app called KindredTalent...',
          },
        ],
      });
    } else if (userId == 2) { // TODO: Replace this with real data
      this.setState({
        activeThread:
          [
            // from referrer
            {
              message_id: 4,
              referrer_id: this.state.user.userType === 'referrer' ? this.state.user.id : null,
              candidate_id: this.state.user.userType === 'candidate' ? null : this.state.user.id,
              first_name: this.state.user.userType === 'referrer' ? this.state.user.first_name : 'Jane',
              last_name: this.state.user.userType === 'referrer' ? this.state.user.last_name : 'Test',
              message: `Hi ${this.state.user.userType === 'referrer' ? 'Jane' : this.state.user.first_name}, we are looking for a React developer. Would you be interested?`,
            },
            // from candidate
            {
              message_id: 5,
              referrer_id: this.state.user.userType === 'referrer' ? null : this.state.user.id,
              candidate_id: this.state.user.userType === 'candidate' ? this.state.user.id : null,
              first_name: this.state.user.userType === 'candidate' ? this.state.user.first_name : 'Jane',
              last_name: this.state.user.userType === 'candidate' ? this.state.user.first_name : 'Test',
              message: `Hi ${this.state.user.userType === 'referrer' ? this.state.user.first_name : 'Jane'}. I am actually more interested in back-end roles. But thanks for reaching out!`,
            },
          ],
      });
    } else {
      this.setState({
        activeThread:
          [],
      });
    }
  }

  addMessageToThread(msg) {
    msgId += 1;
    if (this.state.user.userType === 'referrer') {
      this.setState({
        activeThread: [...this.state.activeThread, {
          message_id: msgId,
          referrer_id: this.state.user.id,
          first_name: this.state.user.first_name,
          last_name: this.state.user.last_name,
          message: msg,
        }],
      });
    } else if (this.state.user.userType === 'candidate') {
      this.setState({
        activeThread: [...this.state.activeThread, {
          message_id: msgId,
          candidate_id: this.state.user.id,
          first_name: this.state.user.first_name,
          last_name: this.state.user.last_name,
          message: msg,
        }],
      });
    }
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="message-container">
        {/* Conversation Picker */}
        <div className="convo-picker">
          <div className="search-threads">
            <img src="/../../magnifyglass.svg" alt="Magnifying glass" />
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.query}
              placeholder="Search..."
            />
            <img src="/../../plussign.svg" alt="Add contact" />
          </div>
          { this.state.activeThreadId ?
              Object.keys(this.state.messageThreadData).map(key => (
              this.state.activeThreadId === key ?
                <SelectThread
                  name={`${this.state.messageThreadData[key].first_name}
                  ${this.state.messageThreadData[key].last_name}`}
                  role={this.state.messageThreadData[key].role}
                  imgUrl={this.state.messageThreadData[key].picture_url}
                  key={key}
                  sendToId={key}
                  activateThread={() => this.makeThreadActive(key)}
                  active
                /> :
                <SelectThread
                  name={`${this.state.messageThreadData[key].first_name}
                  ${this.state.messageThreadData[key].last_name}`}
                  role={this.state.messageThreadData[key].role}
                  imgUrl={this.state.messageThreadData[key].picture_url}
                  key={key}
                  sendToId={key}
                  activateThread={() => this.makeThreadActive(key)}
                />
              ))
            : Object.keys(this.state.messageThreadData).map(key =>
              (<SelectThread
                name={`${this.state.messageThreadData[key].first_name}
                      ${this.state.messageThreadData[key].last_name}`}
                role={this.state.messageThreadData[key].role}
                imgUrl={this.state.messageThreadData[key].picture_url}
                key={key}
                sendToId={parseInt(key)}
                activateThread={() => this.makeThreadActive(key)}
              />
            ))
          }
        </div>
        {/* Chat window */}
        <div className="chat-window">
          {console.log('activeThreadId in MC', this.state.activeThreadId)}
          {this.state.activeThreadId !== null ?
            <ChatWindow
              loggedInUser={this.state.user}
              sendToId={this.state.activeThreadId}
              sendToData={this.state.messageThreadData[this.state.activeThreadId]}
              thread={this.state.activeThread}
              updateThread={() => this.addMessageToThread}
            /> : <ChatWindow updateThread={() => this.addMessageToThread} /> }
        </div>
      </div>
    );
  }
}

MessageContainer.propTypes = {
  loggedInRef: PropTypes.bool,
  loggedInCand: PropTypes.bool,
  checkAuth: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  target: PropTypes.string,
  setTarget: PropTypes.func,
};

MessageContainer.defaultProps = {
  loggedInRef: false,
  loggedInCand: false,
  target: '',
  setTarget: null,
};

export default withRouter(MessageContainer);
