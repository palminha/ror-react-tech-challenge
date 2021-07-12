import * as React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, FunctionComponent } from 'react';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar () { 
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">
                <Link href="/users" color="inherit">
                    &nbsp;Users&nbsp;
                </Link>
                <Link href="/about" color="inherit">
                    &nbsp;About&nbsp;
                </Link>
            </Typography>
            </Toolbar>
        </AppBar>
    );
  }
  
  export default NavBar;
  