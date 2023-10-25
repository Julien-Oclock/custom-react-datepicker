import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';

const DatePicker = ({ label, onChange }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker label={label} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default DatePicker; 