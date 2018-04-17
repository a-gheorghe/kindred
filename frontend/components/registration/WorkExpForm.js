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
    console.log('this.state in handle work change', this.state)
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }


  render() {
    return (
      <div>
        <form>
          Company: <input type="text" name="company" onChange={this.handleWorkChange}  /> <br/>
          Job Position: <input type="text" name="position" onChange={this.handleWorkChange} /> <br/>
          Description: <input type="text" name="description" onChange={this.handleWorkChange} /><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(WorkExpForm);
