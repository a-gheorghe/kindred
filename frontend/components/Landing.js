import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// import AuthButton from './AuthButton';
// import ShortBio from './ShortBio';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.history.push(`/messages/${id}`);
  }

  render() {
    console.log('landing props', this.props);
    return (
      <div>
        <div>
          Main landing page (referrer focused) <br />
          <a href="/candidate" style={{ fontSize: 10 }}> I&apos;m looking for a job </a>
          <a href="/app/login" style={{ fontSize: 10, float: 'right' }}> Login </a> <br />
        </div>

        <div>
          Here are some well qualified candidates
          <br />
          {[1, 2, 3, 4].map(id => (
            <div
              style={{ border: '1px solid black' }}
              onClick={() => this.handleClick(id)}
              onKeyPress={this.handleClick(id)}
              key={id}
              role="button"
              tabIndex={0}
            >
              {/* tabIndex allows for user to tab to a link/button */}
              Connect with Candidate One
            </div>))}
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  history: PropTypes.arrayOf('string').isRequired,
};

export default withRouter(Landing);
