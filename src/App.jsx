import React, { useEffect, useState } from "react";
import Datepicker from "./component/DatePicker";
import { Stack, TextField } from "@mui/material";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  console.log({ selectedDate });
  useEffect(() => {
    console.log({ selectedDate });
  }, [selectedDate]);

  const handleDateChange = (date) => {
    console.log({ date });
    setSelectedDate(date);
  };

  return (
    <Stack spacing={4} sx={{ width: "100%" }}>
      <h1>You selected: {selectedDate ? selectedDate.toString() : "No date selected"}</h1>
      <Datepicker
        label="Start Date"
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
      />
    </Stack>
  );
}

export default App;