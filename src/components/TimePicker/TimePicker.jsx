import { TimePicker } from 'react-ios-time-picker';

import './TimePicker.css';

const TimeInput = ({ onTimeSelect }) => {
  const onChange = timeValue => {
    onTimeSelect(timeValue);
  };

  return (
    <>
      <TimePicker onChange={onChange} use12Hours />
    </>
  );
};

export default TimeInput;
