import React from 'react';
import '../styles/styles.css';


const ProgressBarAdditional = () => (
  <div style={{ width: '100%' }}>
    <img
      src="/progressBar3.svg"
      style={{
        width: '566px',
        height: '75px',
        margin: '60px auto',
        display: 'block',
      }}
      alt="Step 3 of 3"
    />
    <div className="thanksFor">
      <span className="thanksline1">
        Almost done. We just need a few things before we show you off to the world.
      </span>
      <span className="thanksline2">
        We use this information to help match you with jobs matching your areas of expertice.
      </span>
    </div>
  </div>
);

export default ProgressBarAdditional;
