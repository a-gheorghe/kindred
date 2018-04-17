import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import OptionsCand from './OptionsCand';
import WorkExperience from './WorkExperience';

class CandidateRegisterProfile extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        workExperiences: []
      }

    let count = 0
    this.addWork = () => {
      count++
      let workExperiences = this.state.workExperiences.concat({component: WorkExperience, uid: count})
      this.setState({ workExperiences })
    }

    // this.removeWork = () => {
    //   console.log('hello')
    // }

    this.removeWork = (id) => {
      let workExperiences = this.state.workExperiences.slice()
      workExperiences.splice(id, 1)
      this.setState({ workExperiences })
    }
}

  removeWork = (id) => {
    const workExperiences = this.state.workExperiences.slice();
    workExperiences.splice(id, 1);
    this.setState({ workExperiences });
  }

  render() {
    const workExperiences = this.state.workExperiences.map((element, index) => {
      return(<div> <element.component key={element.uid} index={ index } removeWork={this.removeWork}/> </div>)
    });

    return (
        // <OptionsCand
        //   loggedInCand={this.props.loggedInCand}
        //   logoutCand={this.props.logoutCand}
        // />
        <div>
          <div>So far so good. Let's talk about your experience.</div>
          <div>
            <b> Work Experience: </b>
            <button onClick={ this.addWork }>+</button><br/>
            { workExperiences }
          </div>
      </div>
    );
  }
}

CandidateRegisterProfile.propTypes = {
  loggedInCand: PropTypes.bool.isRequired,
  logoutCand: PropTypes.func.isRequired,
};

export default withRouter(CandidateRegisterProfile);
