import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, parseISO } from 'date-fns';

import './Calendar.css';

export default function DatePicker({ onDateSelect }) {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const handleDateSelect = date => {
    onChange(date);
  };

  const handleConfirmDate = () => {
    setShowCalendar(false);
    onDateSelect(value);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <div className="calendar-container">
      {showCalendar && (
        <div>
          <Calendar
            onChange={onChange}
            value={value}
            calendarType={'gregory'}
            next2Label={''}
            prev2Label={''}
            formatDate={date => {
              const parsedDate = parseISO(date);
              return format(parsedDate, 'dd.MM');
            }}
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
