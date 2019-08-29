import React from 'react';

import Button from '../../ui/Button';
import './mode.css';

const Modes = ({ modes, onModeSelect }) => (
  <div className="Modes">
    <span className="label">Choose an option</span><br />
    {Object.keys(modes).map(mode => {
      const label = modes[mode].label;

      return (<div className='divButton'>
        <Button onClick={() =>onModeSelect(mode)}>
          {label}
        </Button ></div>);
    })
    }
  </div>
);

export default Modes;