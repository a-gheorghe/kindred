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
        <div className="work-exp-header">WORK EXPERIENCE</div>
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
                <div id="profile-company-name">{work.company}</div>
                <div className="work-info">
                  <div id="profile-title">{work.title}&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                  <div id="profile-dates">
                    Start Date {work.startdate} - End Date {work.enddate}
                  </div>
                </div>
                <div id="profile-desc">{work.description}</div>
              </div>
              <div className="toggleExp">
                <input alt="close" type="image" src="/RedX.svg" onClick={e => removeWork(work.id, e)} />
                <input alt="edit" type="image" src="/RedEdit.svg" onClick={e => makeWorkEditable(work.id, e)} />
              </div>
            </div>
        ))}
        {workFormShown ?
          <div> <WorkExpForm addWorkCloseForm={addWorkCloseForm} /> </div> :
          <div id="red-button"><button className="addButton" onClick={toggleWorkForm}> Add Work Experience </button></div>}
      </div>
    );
  }
}


export default withRouter(ExperienceWrapper);
