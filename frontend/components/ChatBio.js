import React from 'react';
import PropTypes from 'prop-types';

import { withRouter, Link } from 'react-router-dom';

class ChatBio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [],
      showingAllSkills: false,
      status: '',
      eligibleListings: [],
      selectedListings: [],
    };

    this.showAllSkills = this.showAllSkills.bind(this);
    this.sendReferral = this.sendReferral.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    const numSkills = this.props.candSkills.length;
    if (numSkills > 5) {
      const firstFiveSkills = this.props.candSkills.slice(0, 5);
      this.setState({
        skills: firstFiveSkills,
        showingAllSkills: false,
      });
    } else {
      this.setState({
        skills: this.props.candSkills,
        showingAllSkills: true,
      });
    }
    // fetch job listings referrer can refer candidates to
    this.setState({
      eligibleListings: [
        { id: 1, title: 'Front End Developer' },
        { id: 2, title: 'UI/UX Specialist' },
        { id: 3, title: 'CMS Administrator' },
      ],
    });
  }

  componentWillReceiveProps(nextProps) {
    // if the user being rendered has changed...
    if (this.props.candId !== nextProps.candId) {
      // return to default settings
      const numSkills = this.props.candSkills.length;
      if (numSkills > 5) {
        const firstFiveSkills = nextProps.candSkills.slice(0, 5);
        this.setState({
          skills: firstFiveSkills,
          showingAllSkills: false,
        });
      }
    }
  }

  showAllSkills() {
    this.setState({
      skills: this.props.candSkills,
      showingAllSkills: true,
    });
  }

  sendReferral() {
    console.log('sending Referral to listings with ids: ', this.state.selectedListings);
    this.setState({
      status: 'Sending...',
    });
    // send fetch request to update db with new referral
    setTimeout(() => {
      this.setState({
        status: 'Done!',
      });
    }, 3000);
    this.props.history.push('/ref/referrals'); // go to view status of referrals
  }

  handleSelection(e) {
    console.log('handleSelection');
    e.preventDefault();
    const options = e.target;
    const values = [];
    // retrieve selected values
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
        console.log(values);
      }
    }
    // update state
    this.setState({
      selectedListings: values,
    });
  }

  render() {
    return (
      <div>
        <img
          src={this.props.candData.picture_url}
          alt={`${this.props.candData.first_name} ${this.props.candData.last_name}`}
        />
        <h3>{`${this.props.candData.first_name} ${this.props.candData.last_name}`}</h3>
        <h4>{this.props.candData.role}</h4>
        <h5><Link to="/ref/allCandidates">View Profile</Link></h5>
        <h5><Link to="/ref/allCandidates">View Resume</Link></h5>
        <hr />
        <h4>Education</h4>
        {this.props.candEd.map(edu => (
          <div key={`${edu.id}_${edu.schoolName}`}>
            <h5>{edu.schoolName}</h5>
            <p>{edu.degree} in {edu.major}</p>
            <p>Class of {edu.graduation}</p>
          </div>
        ))}
        <h4>Work Experience</h4>
        {this.props.candWork.map(work => (
          <div key={`work_${work.title}_${work.company}`}>
            <h5>{work.title} at {work.company}</h5>
            <p>
              {work.startDate && work.endDate ? `${work.startDate} to ${work.endDate}` : null}
              {work.startDate && (work.current === true) ? `Since ${work.startDate}` : null}
            </p>
            <p>{work.description}</p>
          </div>
        ))}
        <hr />
        <h4>Skills</h4>
        { this.state.skills.map(skill => (
          <button key={`cand_${skill}`} disabled>{skill}</button>
        )) }
        { this.state.showingAllSkills ? null :
        <button onClick={this.showAllSkills}>Show more...</button>
        }
        <hr />
        {
          this.state.eligibleListings.length === 0 ?
          'No eligible job listings available.' :
          <form>
            <select onChange={this.handleSelection} name="listings" multiple>,
              {this.state.eligibleListings.map(job => (
                <option key={`listing_${job.id}`} value={job.id}>{job.title}</option>
              ))}
            </select>
            <button type="submit" onClick={this.sendReferral}>Send Referral</button>
            {this.state.status}
          </form>
        }
      </div>
    );
  }
}

ChatBio.propTypes = {
  candId: PropTypes.string,
  candData: PropTypes.object,
  candEd: PropTypes.array,
  candWork: PropTypes.array,
  candSkills: PropTypes.array,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

ChatBio.defaultProps = {
  candId: null,
  candData: {},
  candEd: [],
  candWork: [],
  candSkills: [],
};

export default withRouter(ChatBio);
