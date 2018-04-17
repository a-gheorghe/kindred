import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import OptionsCand from './OptionsCand'
import WorkExperience from './WorkExperience'


class CandidateRegisterTwo extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        workExperiences: []
      }
    var workExperiences;
    this.addWork = () => {
      workExperiences = this.state.workExperiences.concat(WorkExperience)
      this.setState({ workExperiences })
    }

    // this.removeWork = () => {
    //   console.log('hello')
    // }

    this.removeWork = (id) => {
      console.log('LENGTH BEFORE', workExperiences.length)
      console.log('yoyoyoyo', id, workExperiences)
      this.state.workExperiences.splice(id, 1)
      console.log('work experiences length after', workExperiences.length)
      this.setState({ workExperiences })
    }
}


  render() {
    const workExperiences = this.state.workExperiences.map((WorkExperience, index) => {
      return(<div key={ index }> <WorkExperience index={ index } removeWork={this.removeWork}/> </div>)
    });

    return (
      <div>
        <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand}/> <br/>
          <b>Candidate Profile</b><br/>
          <div>
            <b> Work Experience: </b>
            <button onClick={ this.addWork }>+</button><br/>
            { workExperiences }
          </div>
      </div>
    )
  }
}

export default withRouter(CandidateRegisterTwo);
