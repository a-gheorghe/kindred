import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthButton from './AuthButton'
import MessageThread from './MessageThread'

const Messages = (props) =>  {
  return (
  <div>
    <AuthButton authCand={props.authCand}/>
    <b>Here are your messages</b> <br/>
    <MessageThread />
    <MessageThread />
    <MessageThread />
    <MessageThread />
  </div>
  )
}

export default Messages;
