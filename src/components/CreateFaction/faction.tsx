import React, { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FactionOptions from "./factionOptions";
import AddAmbition from "./AddButton/addAmbition";

const Faction: React.FC<{
  onChange?: React.ChangeEventHandler<HTMLElement>;
}> = ({ onChange }) => {
  return (
    <Box
      component="form"
      sx={{
        width: 200,
        height: 100,
        backgroundColor: "secondary.dark",
        "&:hover": {
          backgroundColor: "secondary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        size="small"
        onChange={onChange}
      />
      <AddAmbition />
    </Box>
  );
};

export default Faction;
