import React, { Component } from 'react';
import covenMembers from '../assets/covenMembers';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    background: 'purple',
  },
});

const Coven = () => {
  const classes = useStyles;

  return (
    <Box className={classes.root} style={{ backgroundColor: 'purple' }}>
      <div> </div>
    </Box>
  );
};

export default Coven;
