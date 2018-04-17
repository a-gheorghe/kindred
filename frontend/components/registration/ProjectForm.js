import React from 'react';
import { withRouter, Route } from 'react-router-dom';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }
  }

  handleNameChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({name: event.target.value})
  }

  handleDescriptionChange = (event) => {
    console.log('this.state is: ', this.state)
    this.setState({description: event.target.value})
  }


  render() {
    return (
      <div>
        <form>
          Project Name: <input type="text" name="name" onChange={this.handleNameChange}  /> <br/>
          Description: <input type="text" name="description" onChange={this.handleDescriptionChange} /><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
