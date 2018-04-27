import React from 'react';
import { withRouter } from 'react-router-dom'
import WorkExpForm from './WorkExpForm'



class ExperienceWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workExpArr, addWork, removeWork, onChange, workFormShown, toggleWorkForm, makeWorkEditable, addWorkCloseForm, addEditedWork } = this.props

    return (
      <div style={{ border: '1px solid black' }}>
        <h3>Work Experience</h3>
        {workExpArr.length === 0 ? <p> Add first work experience </p> : ''}
        <div>
          {workExpArr.map((work, i) => {
            return (
              work.editable ?
              <WorkExpForm addEditedWork={addEditedWork} start_date = {work.start_date} end_date={work.end_date} current = {work.current} company={work.company} title={work.title} description={work.description} id={work.id} editable={true} addWorkCloseForm={addWorkCloseForm} editedVersion={true} positionArray={i} />
              :
              <div style={{border: '1px solid green'}} key={work.id}>
                Company: {work.company} <br/>
                Title: {work.title} <br/>
                Description: {work.description} <br/>
                Start Date: {work.start_date} <br/>
                End Date: {work.end_date} <br/>
                Current: {work.current}
                <button onClick={(e) => removeWork(work.id, e)}> Delete </button>
                <button onClick={(e) => makeWorkEditable(work.id, e)}> Edit </button>
              </div>
            )})}
          </div>
          {workFormShown ? <div> <WorkExpForm addWorkCloseForm={addWorkCloseForm} /> </div> : <button onClick={toggleWorkForm}> Add Work Experience </button>}
        </div>
      )
    }
  }


  export default withRouter(ExperienceWrapper);
