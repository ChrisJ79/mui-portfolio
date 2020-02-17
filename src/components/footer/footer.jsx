import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    }
}));

export default function Footer() {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        <Button href="https://github.com/ChrisJ79" target="_blank" color="primary">
          <img src="./github-icon__50x50.png" alt="" />
        </Button>
        </Typography>
      </footer>
  )
}
