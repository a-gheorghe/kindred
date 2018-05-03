import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkExpForm from './WorkExpForm';

class ExperienceWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('experience wrapper this.props', this.props);
    const {
      workExpArr,
      addWork,
      removeWork,
      onChange,
      workFormShown,
      toggleWorkForm,
      makeWorkEditable,
      addWorkCloseForm,
      addEditedWork,
    } = this.props;

    return (
      <div className="experBigDiv">
        {workExpArr.map((work, i) => (
          work.editable ?
            <WorkExpForm
              addEditedWork={addEditedWork}
              startdate={work.startdate}
              enddate={work.enddate}
              current={work.current}
              company={work.company}
              title={work.title}
              description={work.description}
              id={work.id}
              editable
              addWorkCloseForm={addWorkCloseForm}
              editedVersion
              positionArray={i}
            />
          :
            <div className="experDiv" key={work.id}>
              <div className="experImgDiv" />
              <div>
                <div>
                Company: {work.company}
                </div>
                <div>
                Title: {work.title}
                Start Date: {work.startdate}
                End Date: {work.enddate}
                </div>
                <div>
                Description: {work.description}
                </div>
              </div>
              <div>
                <button onClick={e => removeWork(work.id, e)}> Delete </button>
                <button onClick={e => makeWorkEditable(work.id, e)}> Edit </button>
              </div>
            </div>
        ))}
        {workFormShown ? <div> <WorkExpForm addWorkCloseForm={addWorkCloseForm} /> </div> : <button className="addButton" onClick={toggleWorkForm}> Add Work Experience </button>}
      </div>
    );
  }
}


export default withRouter(ExperienceWrapper);
