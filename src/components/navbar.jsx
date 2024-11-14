import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import SizeAvatars from './Avtar';
import PositionedMenu from './dropDown';

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <PositionedMenu open="open"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vaibhav's Portfolio
          </Typography>
          <Button color="inherit">
            <SizeAvatars/>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}