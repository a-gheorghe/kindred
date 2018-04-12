import React, { Component } from 'react'

const Message = (props) =>  {
  return (
    <div style={{border: '1px dotted black'}}> <label style={{color: 'red'}} htmlFor={props.name}> {props.name} </label><br/> {props.value} </div>
  );
}

export default Message;
