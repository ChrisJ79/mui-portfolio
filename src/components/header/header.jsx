import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import '../../App.scss';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));


  export default function Header() {
    const classes = useStyles();
    return (
    <div>
    {/* AppBar */}
      <CssBaseline />
      <AppBar position="relative" className="appBar">
        <Toolbar>
        <Container maxWidth="sm" align="center">
          <Typography variant="h6" color="inherit" noWrap className="toolIconContainer">
            Made with <br /><img src="./react_no_bg__56x50.png" className="toolIcon"  alt=""/> React.js & <br /><img src="./material-ui__62x50.png" className="toolIcon" alt=""/> Material UI
          </Typography>
        </Container>
        </Toolbar>
      </AppBar>
    {/* Title Banner */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Chris Johnson
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Front End Web Developer<br />
            React Enthusiast
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button href="./cj_current_dev_res__2020.pdf" target="_blank" variant="contained" color="primary">
                  Resume
                </Button>
              </Grid>
              <Grid item>
                <Button href="https://github.com/ChrisJ79" target="_blank" variant="outlined" color="primary">
                  Github
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  )
}
