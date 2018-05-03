import React from 'react';

class WorkExpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      company: props.company || '',
      title: props.title || '',
      description: props.description || '',
      start_date: props.start_date || '',
      end_date: props.end_date || '',
      current: props.current || '',
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
      () => this.props.addEditedWork(this.state.company, this.state.title, this.state.description, this.state.start_date, this.state.end_date, this.state.current, this.state.editable, this.state.id, this.props.positionArray))
    }

    render(){
      console.log('work form this.props', this.props)
      console.log('work form this.state', this.state)
      const { addWorkCloseForm, addEditedWork, editedVersion, positionArray } = this.props


      return (
        <div className="workExpFormDiv">
          <div style={{ display: "flex", flexDirection: "column" }}>
            Company: <input type="text" name="company" value={this.state.company} onChange={this.handleInputChange} />
            Title: <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
            Description: <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
            Start Date: <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleInputChange} /> <br/>
            End Date: <input type="text" name="end_date" value={this.state.end_date} onChange={this.handleInputChange} /> <br/>
            Current: <input type="text" name="current" value={this.state.current} onChange={this.handleInputChange} />
          </div>
          {editedVersion ?
            <button onClick={() => this.disableEditAndAdd()}> Save </button> :
            <button onClick={() => addWorkCloseForm(this.state.company, this.state.title, this.state.description, this.state.start_date, this.state.end_date, this.state.current, this.state.editable)}> Save </button>}
          </div>
        )
      }
    }



    export default WorkExpForm
