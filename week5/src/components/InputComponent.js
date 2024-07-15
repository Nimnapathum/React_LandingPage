import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputState, setInputState] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInputState('Input value is changing');
  };

  const handleFocus = () => {
    setInputState('Input is focused');
  };

  const handleBlur = () => {
    setInputState('Input has lost focus');
  };

  const handleButtonClick = () => {
    alert(`Current Input Value: ${inputValue}`);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '300px', margin: '0 auto', mt: 5 }}
    >
      <Typography variant="h5" align="center">Input Component</Typography>
      <TextField
        label="Enter something"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Show Input Value
      </Button>
      <Typography variant="body1" align="center">{inputState}</Typography>
      <Typography variant="body1" align="center">Current Value: {inputValue}</Typography>
    </Box>
  );
};

export default InputComponent;
