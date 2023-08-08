import React, { useState } from 'react';
// import { TimePicker } from 'react-ios-time-picker';

import './TimePicker.css';

const Time = ({ onTimeSelect }) => {
  const [value, setValue] = useState('10:00 AM');

  const onChange = timeValue => {
    setValue(timeValue);
  };

  return (
    <div>
      {/* <TimePicker onChange={onChange} value={value} use12Hours /> */}
    </div>
  );
};

export default Time;
