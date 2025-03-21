import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Header() {
  return (
      <AppBar position="static" sx={{
        backgroundColor:"black"
      }}>
        <Toolbar variant="dense">
          <Typography variant="span" color="inherit" component="div">
            Profilics
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
