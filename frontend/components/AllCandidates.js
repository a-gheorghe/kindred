import React from 'react';

import ShortBio from './ShortBio';

const AllCandidates = (props) => {
  console.log('all candidate props', props);
  return (
    <div>
      Here are all the candidates
      <ShortBio /> <br />
      <ShortBio /> <br />
      <ShortBio /> <br />
      <ShortBio /> <br />
    </div>
  );
};

export default AllCandidates;
