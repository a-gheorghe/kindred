import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectname: '',
      description: ''
    }
  }

  handleProjectChange = (event) => {
    console.log('this.state in handle work change', this.state)
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }


  render() {
    return (
      <div>
        <form>
          Project Name: <input type="text" name="projectname" onChange={this.handleProjectChange}  /> <br/>
          Description: <input type="text" name="description" onChange={this.handleProjectChange} /><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
