import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useState, FunctionComponent } from 'react';

function NavBar () { 
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">
                About
            </Typography>
            </Toolbar>
        </AppBar>
    );
  }
  
  export default NavBar;
  