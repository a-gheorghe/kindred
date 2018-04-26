import React from 'react';

import UpdateStatusModal from './UpdateStatusModal';
import Referral from './Referral';


class GivenReferrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referrals: [],
      modalOpen: false,
      selectedRefId: null,
    };

    this.openModal = this.openModal.bind(this);
    this.getCandDataForId = this.getCandDataForId.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // do fetch request to get referral data
    this.setState({
      referrals: [
        {
          id: 7,
          candName: 'Bob Test',
          img: 'http://via.placeholder.com/25x25',
          role: 'Front End Engineer',
          status: 'pending',
        },
        {
          id: 6,
          candName: 'Kayla Norman',
          img: 'http://via.placeholder.com/25x25',
          role: 'Systems Administrator I',
          status: 'hired',
        },
        {
          id: 5,
          candName: 'Jake Smith',
          img: 'http://via.placeholder.com/25x25',
          role: 'Database Administrator',
          status: 'denied',
        },
      ],
    });
  }

  getCandDataForId() {
    console.log('searching for id #', this.state.selectedRefId);
    for (let i = 0; i < this.state.referrals.length; i++) {
      if (this.state.referrals[i].id === this.state.selectedRefId) {
        console.log('found ref with correct id', this.state.referrals[i]);
        return this.state.referrals[i];
      }
    }
    return null;
  }

  openModal(id) {
    // display the modal
    this.setState({ modalOpen: true, selectedRefId: id });
  }

  closeModal(id, newStatus) {
    // if there are changes made
    if (id && newStatus) {
      const updatedState = [];
      // update the record at id with newStatus
      for (let i = 0; i < this.state.referrals.length; i++) {
        if (this.state.referrals[i].id === id) {
          console.log('found ref to update', this.state.referrals[i]);
          // create a record with updated value
          const updatedRef = { ...this.state.referrals[i], status: newStatus };
          updatedState.push(updatedRef);
        } else {
          updatedState.push(this.state.referrals[i]);
        }
      }
      console.log(`updated id # ${id} to ${newStatus}`);
      this.setState({ modalOpen: false, referrals: updatedState });
    } else {
      // just close it without updating any referral state
      this.setState({ modalOpen: false });
    }
  }

  render() {
    return (
      <div>
        { this.state.modalOpen ?
          <UpdateStatusModal
            candData={this.getCandDataForId()}
            closeModal={this.closeModal}
          />
          : null}
        <h2>Referrals given:</h2>
        {this.state.referrals.map(ref =>
          (<Referral
            candData={ref}
            key={ref.id}
            openModal={this.openModal}
          />))
        }
      </div>
    );
  }
}

export default GivenReferrals;
