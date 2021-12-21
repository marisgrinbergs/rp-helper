import React, { useState } from "react";
import "./index.css";
import AddButton from "./AddButton";
import Grid from "@mui/material/Grid";
import Faction from "./faction";

const CreateFaction = () => {
  const [faction, setFaction] = useState<boolean>(false);
  const createFactionOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFaction(!faction);
    console.log("faction", faction);
  };
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <div className="createfaction">
      <div className="createfaction-name">Créer votre Faction</div>
      <Grid
        item
        xs={4}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginLeft="110px"
      >
        <AddButton onClick={createFactionOnClick} />
        {faction === true ? <Faction onChange={changeInput} /> : <div></div>}
      </Grid>
    </div>
  );
};

export default CreateFaction;
