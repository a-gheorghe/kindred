import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class WorkExpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      description: ''
    }
  }

  handleWorkChange = (event) => {

  }

  handleCompanyChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({company: event.target.value})
  }

  handlePositionChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({Position: event.target.value})
  }

  handleDescriptionChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({description: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          Company: <input type="text" name="company" onChange={this.handleCompanyChange}  /> <br/>
          Job Position: <input type="text" name="position" onChange={this.handlePositionChange} /> <br/>
          Description: <input type="text" name="description" onChange={this.handleDescriptionChange} /><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(WorkExpForm);
