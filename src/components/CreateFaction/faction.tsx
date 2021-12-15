import React, { useState } from 'react';
import './index.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Faction = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </Box>
  );
}

export default Faction;
