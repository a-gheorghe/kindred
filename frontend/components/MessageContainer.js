import React from 'react';
import { withRouter } from 'react-router-dom';

import SelectThread from './SelectThread';
import ChatWindow from './ChatWindow';
import ChatBio from './ChatBio';
import '../components/styles/styles.css';

let msgId = 5;

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      activeThreadId: null, // candidate id of active thread
      activeThread: [],
      activeEd: [],
      activeWork: [],
      activeSkills: [],
      messageThreadData: {
        1: { // key is candidate_id #
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
    this.props.checkAuthRef()
      .then(resp => this.setState({ user: resp }))
      .catch(err => console.log("couldn't authenticate"));
  }

  makeThreadActive(candId) {
    this.setState({
      activeThreadId: candId,
    });

    console.log('updating the active thread props');
    console.log('currentThreadId', this.state.activeThreadId);
    if (candId == 1) { // TODO: Replace this with real data
      this.setState({
        activeThread:
        [
          {
            message_id: 1,
            referrer_id: this.state.user.id,
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name,
            message: 'Hi Bob, we are looking for a React developer. Would you be interested?',
          },
          {
            message_id: 2,
            candidate_id: 1,
            first_name: 'Bob',
            last_name: 'Test',
            message: 'Hi Ana, yes I am. Could you give me more details about this job position?',
          },
          {
            message_id: 3,
            referrer_id: this.state.user.id,
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name,
            message: 'Of course! Well, we are building this amazing app called KindredTalent...',
          },
        ],
      });
    } else if (candId == 2) { // TODO: Replace this with real data
      this.setState({
        activeThread:
          [
            {
              message_id: 4,
              referrer_id: this.state.user.id,
              first_name: this.state.user.first_name,
              last_name: this.state.user.last_name,
              message: 'Hi Jane, we are looking for a React developer. Would you be interested?',
            },
            {
              message_id: 5,
              candidate_id: 1,
              first_name: 'Jane',
              last_name: 'Test',
              message: 'Hi Ana. I am actually more interested in back-end roles. But thanks for reaching out!',
            },
          ],
      });
    } else {
      this.setState({
        activeThread:
          [],
        activeWork:
          [],
        activeEd:
          [],
        activeSkills:
          [],
      });
    }
  }

  addMessageToThread(msg) {
    msgId += 1;
    this.setState({
      activeThread: [...this.state.activeThread, {
        message_id: msgId,
        referrer_id: this.state.user.id,
        first_name: this.state.user.first_name,
        last_name: this.state.user.last_name,
        message: msg,
      }],
    });
  }

  render() {
    return (
      <div className="message-container">
        {/* Conversation Picker */}
        <div className="convo-picker">
          <div className="search-threads">
            <img src="/../../magnifyglass.svg" alt="Magnifying glass" />
            <input type="text" placeholder="Search..." />
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
                  candId={key}
                  activateThread={() => this.makeThreadActive(key)}
                  active
                /> :
                <SelectThread
                  name={`${this.state.messageThreadData[key].first_name}
                  ${this.state.messageThreadData[key].last_name}`}
                  role={this.state.messageThreadData[key].role}
                  imgUrl={this.state.messageThreadData[key].picture_url}
                  key={key}
                  candId={key}
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
                candId={parseInt(key)}
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
              userData={this.state.user}
              candId={this.state.activeThreadId}
              candData={this.state.messageThreadData[this.state.activeThreadId]}
              thread={this.state.activeThread}
              updateThread={() => this.addMessageToThread}
            /> : <ChatWindow updateThread={() => this.addMessageToThread} /> }
        </div>
      </div>
    );
  }
}

export default withRouter(MessageContainer);
