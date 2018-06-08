import React from 'react';
import PropTypes from 'prop-types';

const JobListing = props => (
  <div>
    <h4>{props.title}</h4>
    <h5>{props.company}</h5>
    {
      props.url ?
        <span>
          <a href={props.url} target="_blank">External Link</a>
        </span>
      : null
    }
    {
      // in the future, also check to see if ref_id is the same as person
      // who created the listing; for now, only checking to see if user is a ref
      props.loggedInRef ?
        <button onClick={() => props.openModal(props.id)}>Edit Listing</button>
      : null
    }
    {/* {
      // in the future, also check to see if ref_id is the same as person
      // who created the listing; for now, only checking to see if user is a ref
      props.loggedInRef ?
        <button>Delete Listing</button>
      : null
    } */}
  </div>
);

JobListing.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  listing_url: PropTypes.string,
  loggedInRef: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
};

JobListing.defaultProps = {
  listing_url: null,
  loggedInRef: false,
};

export default JobListing;
