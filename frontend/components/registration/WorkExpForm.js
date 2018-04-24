import React from 'react';

class WorkExpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      company: props.company || '',
      title: props.title || '',
      description: props.description || '',
      editable: props.editable || false,
      id: props.id
    }
  }

  handleInputChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  toggleEdit = () => {
    this.setState({editable: !this.state.editable})
  }

  disableEditAndAdd = () => {
    this.setState({editable: !this.state.editable},
      () => this.props.addEditedWork(this.state.company, this.state.title, this.state.description, this.state.editable, this.state.id, this.props.positionArray))
    }

    render(){
      const { addWorkCloseForm, addEditedWork, editedVersion, positionArray } = this.props

      return (
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            Company: <input type="text" name="company" value={this.state.company} onChange={this.handleInputChange} />
            Title: <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
            Description: <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
          </div>
          {editedVersion ?
            <button onClick={() => this.disableEditAndAdd()}> Save </button> :
            <button onClick={() => addWorkCloseForm(this.state.company, this.state.title, this.state.description, this.state.editable)}> Save </button>}
          </div>
        )
      }
    }



    export default WorkExpForm
