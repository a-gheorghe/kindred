import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthButton from './AuthButton'
import ShortBio from './ShortBio'

class Landing extends React.Component {



  handleClick = (id) => {
    // this.props.setTarget(`/messages/${id}`)
    this.props.history.push(`/messages/${id}`)
  }



  render() {
    console.log('landing props', this.props)
    return (
      <div>
        <div>
          Main landing page (referrer focused) <br/>
          <a href="/candidate" style={{fontSize: 10}}> I'm looking for a job </a>
          <a href="/app/login" style={{fontSize: 10, float: 'right'}}> Login </a> <br/>
        </div>

        <div>
          Here are some well qualified candidates <br/>
          { [1,2,3,4].map(id => <div style={{border: '1px solid black'}} onClick={() => this.handleClick(id)} key={id}> Connect with Candidate One</div>) }
        </div>
      </div>
    )
  }
}

export default withRouter(Landing);
