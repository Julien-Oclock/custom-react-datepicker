# custom-datepicker-react

Custom Datepicker for React using Material-UI components.

## Description

`custom-datepicker-react` is a customizable date and time picker component for React applications. It is built using Material-UI components and is designed to be easily integrated into your React projects. This component allows users to select both date and time, and it provides various customization options to meet your specific requirements.

## Installation

You can install `custom-datepicker-react` via npm:

```bash
npm install custom-datepicker-react
```

## Usage

Here's an example of how to use custom-datepicker-react in your React application:

```jsx
import React, { useState } from "react";
import { Datepicker } from "custom-datepicker-react";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Datepicker Example</h1>
      <Datepicker label="Select Date and Time" onChange={handleDateChange} />
      {selectedDate && <p>You selected: {selectedDate.toString()}</p>}
    </div>
  );
}

export default MyComponent;

```

## Props
- label (string): The label to display above the Datepicker component.
- onChange (function): A callback function that receives the selected date and time as a parameter.

## License
This package is licensed under the MIT License. See the LICENSE file for details.

## Contributing
We welcome contributions! If you'd like to contribute to this project, please open an issue or create a pull request.

## Contact
If you have any questions or need assistance, you can contact us at [julien.lxpro@gmail.com].

Acknowledgments
Material-UI: https://mui.com/
Dayjs: https://day.js.org/
Thank you for using custom-datepicker-react!
