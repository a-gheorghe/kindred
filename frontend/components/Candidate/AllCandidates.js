import React from 'react';
import axios from 'axios';

import ShortBio from './ShortBio';

class AllCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    axios.get('/candidates')
      .then((resp) => {
        console.log(resp);
        this.setState({ candidates: resp.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.candidates.length < 1 ?
          <div>
            <ShortBio /> <br />
            <ShortBio /> <br />
            <ShortBio /> <br />
            <ShortBio /> <br />
          </div>
          :
          this.state.candidates.map(cand =>
            <p key={cand.id}>{cand.first_name}</p>)
          }
      </div>
    );
  }
}

export default AllCandidates;
