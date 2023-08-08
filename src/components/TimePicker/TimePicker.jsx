import React, { useState } from 'react';
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';

// import './TimePicker.css';

const showSecond = false;
const str = showSecond ? 'HH:mm' : 'HH:mm:ss';

export default function Time({ onTimeSelect }) {
  const [value, setValue] = useState(new Date());
  const [showTime, setShowTime] = useState(true);

  const handleTimeSelect = time => {
    setValue(time);
    onTimeSelect(time);
  };

  return (
    <>
      <TimePicker
        style={{ width: 100 }}
        showSecond={showSecond}
        defaultValue={moment()}
        className="xxx"
        onChange={handleTimeSelect}
        value={value}
        name="timeField"
      />
    </>
  );
}
