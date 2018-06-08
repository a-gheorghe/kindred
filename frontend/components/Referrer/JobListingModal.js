import React from 'react';
import PropTypes from 'prop-types';

const overlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: '100%',
  height: '100%',
};

const modalStyles = {
  margin: '0 auto',
  width: '300px',
  height: '300px',
  backgroundColor: 'white',
  color: 'black',
  border: 'solid black 1px',
  paddingLeft: '50px',
};

const inputStyle = {
  width: '250px',
};

class JobListingModal extends React.Component {
  constructor(props) {
    super(props);
    console.log('JobListingModal props', props);

    this.state = {
      jobTitle: this.props.listing ? this.props.listing.description : '',
      company: this.props.listing ? this.props.listing.company : '',
      url: this.props.listing ? this.props.listing.listing_url : '',
    };

    this.updateSelection = this.updateSelection.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  updateSelection(e, stateToUpdate) {
    const obj = {};
    obj[stateToUpdate] = e.target.value;
    this.setState(obj);
  }

  submitInput(e) {
    e.preventDefault();
    // send a fetch request with the data, to update the DB
    // close the appropriate modal
    this.props.closeModal({
      id: this.props.listing ? this.props.listing.id : this.props.newId,
      description: this.state.jobTitle,
      company: this.state.company,
      listing_url: this.state.url,
    });
  }

  render() {
    return (
      <div style={overlayStyles}>
        <button onClick={this.props.closeModal}> X </button>
        <div style={modalStyles}>
          <form>
            <h3>Update This Listing:</h3>
            <label htmlFor="jobTitle">
              <input
                style={inputStyle}
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                value={this.state.jobTitle}
                onChange={e => this.updateSelection(e, 'jobTitle')}
              />
            </label>
            <br />
            <label htmlFor="company">
              <input
                style={inputStyle}
                name="company"
                type="text"
                placeholder="Company"
                value={this.state.company}
                onChange={e => this.updateSelection(e, 'company')}
              />
            </label>
            <br />
            <label htmlFor="url">
              <input
                style={inputStyle}
                name="url"
                type="text"
                placeholder="Listing URL"
                value={this.state.url}
                onChange={e => this.updateSelection(e, 'url')}
              />
            </label>
            <br />
            <button
              type="submit"
              onClick={e => this.submitInput(e)}
            >
              {this.props.listing ? 'Update Listing' : 'Add Listing'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

JobListingModal.propTypes = {
  listing: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  newId: PropTypes.number,
};

JobListingModal.defaultProps = {
  listing: null,
  newId: null,
};

export default JobListingModal;
