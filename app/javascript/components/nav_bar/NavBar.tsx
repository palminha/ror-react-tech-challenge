import * as React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, FunctionComponent } from 'react';

const useStyles = makeStyles({
    menuLink: {
      margin: '20px',
    },
  });

function NavBar () { 
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">
                <Link href="/users" color="inherit" className={classes.menuLink}>
                    Users
                </Link>
                <Link href="/about" color="inherit">
                    About
                </Link>
            </Typography>
            </Toolbar>
        </AppBar>
    );
  }
  
  export default NavBar;
  