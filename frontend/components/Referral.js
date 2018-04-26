import React from 'react';

import PropTypes from 'prop-types';

import UpdateStatusModal from './UpdateStatusModal';

const fontStyles = {
  hired: { color: 'green' },
  denied: { color: 'red' },
  pending: { color: 'gold' },
};

const backgroundColors = {
  hired: { backgroundColor: 'green' },
  denied: { backgroundColor: 'red' },
  pending: { backgroundColor: 'gold' },
};

class Referral extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        <table>
          <tbody>
            <tr>
              <th style={{ width: '10px' }} />
              <th style={{ width: '200px' }} />
              <th style={{ width: '200px' }} />
              <th style={{ width: '200px' }} />
              <th />
            </tr>
            <tr>
              <td style={backgroundColors[this.props.candData.status]} />
              <td style={{ textAlign: 'center' }}>
                <img
                  src={this.props.candData.img}
                  alt={this.props.candData.candName}
                />
                <br />
                {this.props.candData.candName}
              </td>
              <td style={{ textAlign: 'center' }}>
                <b>Role</b>
                <br />
                {this.props.candData.role}
              </td>
              <td style={{ textAlign: 'center' }}>
                <b>Status</b>
                <br />
                <span style={fontStyles[this.props.candData.status]}>
                  {this.props.candData.status}
                </span>
              </td>
              <td>
                <button onClick={() =>
                  this.props.openModal(this.props.candData.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        { this.state.modalOpen ? <UpdateStatusModal /> : null }
      </div>
    );
  }
}

Referral.propTypes = {
  candData: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Referral;
