import React from 'react';
import { withRouter } from 'react-router-dom';

import SelectThread from './SelectThread';
import ChatWindow from './ChatWindow';
import ChatBio from './ChatBio';

let msgId = 5;

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          role: 'Front End Engineer',
          picture_url: 'http://via.placeholder.com/150x150',
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
          role: 'Tech Solutions Architect',
          picture_url: 'http://via.placeholder.com/150x150',
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

  makeThreadActive(candId) {
    this.setState({
      activeThreadId: candId,
    });

    console.log('updating the active thread props');
    console.log('currentThreadId', this.state.activeThreadId);
    if (candId === 1) { // TODO: Replace this with real data
      this.setState({
        activeThread:
        [
          {
            message_id: 1,
            senderIsReferrer: true,
            first_name: 'Ana',
            last_name: 'Gheorghe',
            message: 'Hi Bob, we are looking for a React developer. Would you be interested?',
          },
          {
            message_id: 2,
            senderIsReferrer: false,
            first_name: 'Bob',
            last_name: 'Test',
            message: 'Hi Ana, yes I am. Could you give me more details about this job position?',
          },
          {
            message_id: 3,
            senderIsReferrer: true,
            first_name: 'Ana',
            last_name: 'Gheorghe',
            message: 'Of course! Well, we are building this amazing app called KindredTalent...',
          },
        ],
        activeEd: [
          {
            schoolName: 'University of California Berkeley',
            degree: 'Bachelor of Arts',
            major: 'Web Design',
            graduation: '2018',
          },
        ],
        activeWork: [
          {
            startDate: 'Jan 2017',
            endDate: 'May 2017',
            current: false,
            title: 'UI/UX Intern',
            company: 'Mao Incorporated',
            description: 'Designed wireframes, mockups and user stories.',
          },
          {
            startDate: 'September 2017',
            endDate: 'December 2017',
            current: false,
            title: 'Front End Intern',
            company: 'Slack',
            description: 'Designed web pages with HTML, CSS, and Javascript.',
          },
        ],
        activeSkills: [
          'HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Redux', 'React Native', 'Adobe Creative Cloud',
        ],
      });
    } else if (candId === 2) { // TODO: Replace this with real data
      this.setState({
        activeThread:
          [
            {
              message_id: 4,
              senderIsReferrer: true,
              first_name: 'Ana',
              last_name: 'Gheorghe',
              message: 'Hi Jane, we are looking for a React developer. Would you be interested?',
            },
            {
              message_id: 5,
              senderIsReferrer: false,
              first_name: 'Jane',
              last_name: 'Test',
              message: 'Hi Ana. I am actually more interested in back-end roles. But thanks for reaching out!',
            },
          ],
        activeEd: [
          {
            schoolName: 'Mount Holyoke',
            degree: 'Bachelor of Arts',
            major: 'Computer Science',
            graduation: '2014',
          },
          {
            schoolName: 'Stanford College',
            degree: 'Masters of Science',
            major: 'Computer Information Systems',
            graduation: '2017',
          },
        ],
        activeWork: [
          {
            startDate: 'September 2017',
            current: true,
            title: '2017 One Fellow',
            company: 'Horizons School of Technology',
            description: 'Learned how to build web applications using modern frameworks.',
          },
        ],
        activeSkills: [
          'Java', 'C++', 'C#', 'ASP.NET', 'Visual Basic', 'JavaScript', 'SQL', 'Server Architecture',
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
    console.log('candId', typeof candId);
    console.log('active thread', this.state.activeThread);
  }

  addMessageToThread(msg) {
    console.log('getting to addMessageToThread');
    console.log('this', this);
    msgId += 1;
    this.setState({
      activeThread: [...this.state.activeThread, {
        message_id: msgId,
        senderIsReferrer: true,
        first_name: 'Ana',
        last_name: 'Gheorghe',
        message: msg,
      }],
    });
  }

  render() {
    return (
      <div>
        {/* Conversation Picker */}
        <div className="convoPicker">
          { this.state.activeThreadId ?
              Object.keys(this.state.messageThreadData).map(key => (
              this.state.activeThreadId === key ?
                <SelectThread
                  name={`${this.state.messageThreadData[key].first_name}
                  ${this.state.messageThreadData[key].last_name}`}
                  role={this.state.messageThreadData[key].role}
                  key={key}
                  candId={key}
                  activateThread={() => this.makeThreadActive(key)}
                  active
                /> :
                <SelectThread
                  name={`${this.state.messageThreadData[key].first_name}
                  ${this.state.messageThreadData[key].last_name}`}
                  role={this.state.messageThreadData[key].role}
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
                key={key}
                candId={parseInt(key)}
                activateThread={() => this.makeThreadActive(key)}
              />
            ))
          }
        </div>
        {/* Chat window */}
        <div className="chatWindow">
          {console.log('activeThreadId in MC', this.state.activeThreadId)}
          {this.state.activeThreadId !== null ?
            <ChatWindow
              candId={this.state.activeThreadId}
              candData={this.state.messageThreadData[this.state.activeThreadId]}
              thread={this.state.activeThread}
              updateThread={() => this.addMessageToThread}
            /> : <ChatWindow updateThread={() => this.addMessageToThread} /> }
        </div>
        {/* Chat bio */}
        <div className="chatBio">
          {this.state.activeThreadId !== null ?
            <ChatBio
              candId={this.state.activeThreadId}
              candData={this.state.messageThreadData[this.state.activeThreadId]}
              candEd={this.state.activeEd}
              candWork={this.state.activeWork}
              candSkills={this.state.activeSkills}
            /> :
            null
          }
        </div>
      </div>
    );
  }
}

export default withRouter(MessageContainer);
