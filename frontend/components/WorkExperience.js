import React from 'react'
import { withRouter } from 'react-router-dom'

class WorkExperience extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
  console.log('work experience props', this.props)
    return (
    <div style={{border: '1px solid black'}} id={this.props.index}>
      Job Title: <input type="text" name={`document-${ this.props.index }-document` } /> <br/>
      Company Name: <input type="text"/> <br/>
      Job Description: <textarea rows="4" cols="50" type="text" />
      <button onClick={() => this.props.removeWork(this.props.index)}> Delete </button>
    </div>
  )}
}

export default withRouter(WorkExperience)
