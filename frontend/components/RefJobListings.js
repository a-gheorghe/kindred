import React from 'react';
import PropTypes from 'prop-types';

import JobListing from './JobListing';
import JobListingModal from './JobListingModal';

let nextId = 4;

class RefJobListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      listings: [],
      selectedListingId: null,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    // make fetch request to get a bunch of job listings
    // add them to state
    const dummyJerbs = [
      {
        id: 1,
        description: 'Front End Developer',
        company: 'Horizons School of Technology',
        listing_url: 'http://joinhorizons.com/',
      },
      {
        id: 2,
        description: 'UI/UX Specialist',
        company: 'Horizons School of Technology',
        listing_url: 'http://joinhorizons.com/',
      },
      {
        id: 3,
        description: 'CMS Administrator',
        company: 'Kindred Talent',
        listing_url: '',
      },
    ];
    this.setState({
      listings: dummyJerbs,
    });
  }

  getListingDataForId() {
    console.log('searching for id #', this.state.selectedListingId);
    for (let i = 0; i < this.state.listings.length; i++) {
      if (this.state.listings[i].id === this.state.selectedListingId) {
        console.log('found listing with correct id', this.state.listings[i]);
        return this.state.listings[i];
      }
    }
    return null;
  }

  openModal(id) {
    console.log('opening modal');
    this.setState({
      selectedListingId: id,
      modalOpen: true,
    });
    // if adding a new item, go ahead an increment the id number (won't be necessary
    // once using fetch requests)
    if (id === nextId) {
      console.log(`id = ${id} and nextId = ${nextId}`);
      nextId++;
    }
  }

  closeModal(listing) {
    // if there are changes made
    if (listing && listing.id) {
      const newState = [];
      let isNew = true;
      // update the record at id with newStatus
      for (let i = 0; i < this.state.listings.length; i++) {
        if (this.state.listings[i].id === listing.id) {
          console.log('found listing to update', this.state.listings[i]);
          // update the old record, and replace w/ updated values
          newState.push(listing);
          isNew = false;
        } else {
          newState.push(this.state.listings[i]);
        }
      }
      // if the listing already existed, go ahead and add updatedState to state
      if (isNew === false) {
        console.log(`updated id # ${listing.id} to be: `, listing);
        this.setState({ modalOpen: false, listings: newState });
      } else {
        // if the listing is new, add it to updatedState now, and update state
        newState.unshift(listing);
        console.log(`added new listing with id # ${listing.id}: `, listing);
        this.setState({ modalOpen: false, listings: newState });
      }
    } else {
      // just close it without updating any referral state
      this.setState({ modalOpen: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.modalOpen ?
          <JobListingModal
            listing={this.getListingDataForId()}
            closeModal={this.closeModal}
            newId={this.state.selectedListingId}
          />
          : null}
        <h3>My Job Listings</h3>
        <p>These are jobs listings that you are able to refer candidates to.</p>
        <button onClick={() => this.openModal(nextId)}>Create New Listing</button>
        {this.state.listings.map(listing =>
          (<JobListing
            key={listing.id}
            id={listing.id}
            title={listing.description}
            company={listing.company}
            url={listing.listing_url}
            loggedInRef={this.props.loggedInRef}
            openModal={this.openModal}
          />))
        }
      </div>
    );
  }
}

RefJobListings.propTypes = {
  loggedInRef: PropTypes.bool.isRequired,
};

export default RefJobListings;
