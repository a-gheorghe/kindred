<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import OptionsCand from './OptionsCand';
=======
import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import OptionsCand from './OptionsCand'
import WorkExperience from './WorkExperience'
>>>>>>> a-gheorghe


class CandidateRegisterTwo extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.state = {
      workArray: ['hello', 'goodbye'],
    };
  }

  addWork() {
    this.setState({
      workArray: [...this.state.workArray, ' '],
    });
  }
=======
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
>>>>>>> a-gheorghe


  render() {
    const workExperiences = this.state.workExperiences.map((WorkExperience, index) => {
      return(<div key={ index }> <WorkExperience index={ index } removeWork={this.removeWork}/> </div>)
    });

    return (
      <div>
<<<<<<< HEAD
        <OptionsCand
          loggedInCand={this.props.loggedInCand}
          logoutCand={this.props.logoutCand}
        />
        <br />
        <b>Candidate Profile</b>
        <br />
        <div>
          Work Experience <button onClick={this.addWork}> + </button> <br />
          {this.state.workArray.map(workExp => <input type="text" value={workExp} />)}
        </div>
        <br />
          Projects <button> + </button>
        <br />
          Skills and Technologies <button> + </button> <br />
        {/* <Link to='/candidateRegisterTwo'> Next </Link> */}
=======
        <OptionsCand loggedInCand={this.props.loggedInCand} logoutCand={this.props.logoutCand}/> <br/>
          <b>Candidate Profile</b><br/>
          <div>
            <b> Work Experience: </b>
            <button onClick={ this.addWork }>+</button><br/>
            { workExperiences }
          </div>
>>>>>>> a-gheorghe
      </div>
    );
  }
}

CandidateRegisterTwo.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterTwo);
