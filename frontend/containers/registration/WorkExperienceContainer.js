import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import AddWorkButton from '../../components/registration/AddWorkButton';
import WorkViewsWrapperContainer from './WorkViewsWrapperContainer';
import IndivJobContainer from './IndivJobContainer'


class WorkExperienceContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        workArray: []
      }

    let count = 0
    this.addWork = () => {
      console.log('adding work')
      count++
      let workArray = this.state.workArray.concat({component: IndivJobContainer, uid: count})
      this.setState({ workArray })
    }

    this.removeWork = (id) => {
      let workArray = this.state.workArray.slice()
      workArray.splice(id, 1)
      this.setState({ workArray })
    }
  }

  render() {
    const workArray = this.state.workArray.map((element, index) => {
      return (<element.component key={element.uid} uid={element.uid} index={index} removeWork={this.removeWork}/>)
    })

    return (
      <div style={{ border: '1px solid red' }}>
        {/* { workArray } */}
        <WorkViewsWrapperContainer> { workArray }</WorkViewsWrapperContainer>
        <AddWorkButton addWork={this.addWork}/>
      </div>
    );
  }
}

export default withRouter(WorkExperienceContainer);
