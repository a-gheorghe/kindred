import React from 'react';

class ProjectForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      projectstart:''
    }
  }

  handleInputChange = (e) => {
    console.log('this.state changing', this.state)
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  addProjectCloseForm = (title, description, projectstart) => {
    this.props.addProject(title, description, projectstart)
    this.props.toggleProjectForm()
  }

  render(){
    const { data, onChange, index, addProject } = this.props

    return (
      <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Title: <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
        Description: <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
        Start: <input type="text" name="projectstart" value={this.state.projectstart} onChange={this.handleInputChange} />
      </div>
      <button onClick={() => this.addProjectCloseForm(this.state.title, this.state.description, this.state.projectstart)}> Save </button>
    </div>
    )
  }
}


export default ProjectForm
