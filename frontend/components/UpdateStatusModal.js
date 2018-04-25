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

class UpdateStatusModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: this.props.candData.status,
    };

    console.log('this.props.candData in UpdateStatusModal', this.props.candData);

    this.updateSelection = this.updateSelection.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  updateSelection(e) {
    this.setState({ selection: e.target.value });
  }

  submitInput(e) {
    e.preventDefault();
    const chosen = e.target.value;
    console.log('chosen value!', chosen);
    // send a fetch request with the data, to update the DB
    // close the appropriate modal
    this.props.closeModal(this.props.candData.id, this.state.selection);
  }

  render() {
    return (
      <div style={overlayStyles}>
        <button onClick={this.props.closeModal}> X </button>
        <div style={modalStyles}>
          <h3>Update Referral Status</h3>
          <form>
            <input
              type="radio"
              value="pending"
              checked={(this.state.selection === 'pending')}
              onChange={this.updateSelection}
            /> Pending
            <input
              type="radio"
              value="denied"
              checked={(this.state.selection === 'denied')}
              onChange={this.updateSelection}
            /> Denied
            <input
              type="radio"
              value="hired"
              checked={(this.state.selection === 'hired')}
              onChange={this.updateSelection}
            /> Hired
            <br />
            <button
              type="submit"
              onClick={e => this.submitInput(e)}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

UpdateStatusModal.propTypes = {
  candData: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UpdateStatusModal;
