import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Message from './Message'
import OptionsRef from './OptionsRef'

class MessageThread extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      value: '',
      arrayMessages: [{name: 'Ana', value: 'Hi Joe, we are looking for a React developer. Would you be interested?'}, {name: 'Joe', value: 'Hi Ana, yes I am. Could you give me more details about this job position?'}]
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      arrayMessages: [...this.state.arrayMessages, {name: 'Ana', value: this.state.value}]
    })
  }

  render(){

    console.log('this.props inside message thread', this.props)
    const newArrayMessages = this.state.arrayMessages.map((message) => {
      return <Message name={message.name} value={message.value} />
    })

    return (
      <div>
        <OptionsRef loggedInRef={this.props.loggedInRef} logoutRef={this.props.logoutRef} />
        Here are your messages with Candidate
        {newArrayMessages} <br/> <br/>
        <form onSubmit={this.handleSubmit}>
          <textarea type="text" placeholder="Type your message here" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Send message" />
        </form>
      </div>
    )
  }
}

export default withRouter(MessageThread);
