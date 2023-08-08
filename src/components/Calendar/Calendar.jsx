import React, { useState } from 'react';
import Calendar from 'react-calendar';

import './Calendar.css';

export default function DatePicker({ onDateSelect }) {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const handleDateSelect = date => {
    onChange(date);
    const formattedDate = formatDate(date);
    onDateSelect(formattedDate);
    console.log(formattedDate);
  };

  const handleConfirmDate = () => {
    setShowCalendar(false);
    const formattedValue = formatDate(value);
    onDateSelect(formattedValue);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}.${month}`;
  };

  return (
    <div className="calendar-container">
      {showCalendar && (
        <div>
          <Calendar
            onChange={handleDateSelect}
            value={value}
            calendarType={'gregory'}
            next2Label={''}
            prev2Label={''}
          />
          <div className="calendar-buttons">
            <button
              onClick={handleCloseCalendar}
              className="calendar-btn-close"
            >
              Close
            </button>
            <button
              onClick={handleConfirmDate}
              className="calendar-btn-confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
