import React from 'react';
import { Link } from 'react-router-dom'



class Pending extends React.Component {
  render() {
    const candidateObject = JSON.parse(localStorage.getItem('candidateObject'))
    console.log('PENDING PAGE CAND OBJECT LOCAL STORAGE', candidateObject)
    return (
      <div>
        Thanks for registering! We will review your application and email you shortly!
        <a href='/candidate'> Home </a>
      </div>
    )
  }
}

export default Pending;
