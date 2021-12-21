import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './index.css';


// const style = {
//   button: {
//    width: 200,
//    height: 200
//   },
//   cross: {
//     width: 50,
//     height: 50
//   }
// }

const FloatingActionButtons: React.FC<{onClick?: React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
  return (
      <Fab color="primary" aria-label="add" style={{ width: 100, height: 100 }} onClick={onClick}>
        <AddIcon style={{ width: 50, height: 50 }} />
      </Fab>
  );
}

export default FloatingActionButtons;