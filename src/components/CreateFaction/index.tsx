import React, { useState } from 'react';
import './index.css';
import AddButton from './AddButton'
import Grid from '@mui/material/Grid';
import Faction from './faction';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const CreateFaction = () => {
  const [faction, setFaction] = useState<boolean>(false)
  const createFactionOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("test")
    event.preventDefault();
    setFaction(true);
    console.log("faction", faction);
  }
  return (
    <div className="createfaction">
        <div className='createfaction-name'>
            Créer votre Faction
        </div>
        <Grid item xs={4}>
           <AddButton onClick={createFactionOnClick} />
           <Fab color="primary" aria-label="add" style={{ width: 100, height: 100 }} onClick={createFactionOnClick}>
            <AddIcon style={{ width: 50, height: 50 }} />
          </Fab>
           {faction === true ? (
             <Faction />) : (<div></div>)
           }
        </Grid>
    </div>
  );
}

export default CreateFaction;
