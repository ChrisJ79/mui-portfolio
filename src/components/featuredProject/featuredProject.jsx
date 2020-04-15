import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import '../../App.scss';



const useStyles = makeStyles(theme => ({
  root: {
    // height: '100vh',
  },
  image: {
    backgroundImage: 'url(./google-keep-clone-thumbnail__1450x814.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export default function FeaturedProject() {
  const classes = useStyles();
  const featuredProject = [
    {
      "projectLink": "https://chrisj79.github.io/google-keep-clone",
      "sourceCode": "https://github.com/ChrisJ79/google-keep-clone",
      "key": "1"
    }
  ];
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container component="main" className={classes.root}>
        {featuredProject.map((project, index) => {
          return (
          <Grid item item key={project.key} xs={12} sm={8} md={6} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h1">Featured Project</Typography>
              <Divider className="hrDivider"/>
              <Typography gutterBottom variant="h5" component="h2">'Google Keep' Clone</Typography>
              <p>For this project, I created a simple clone of Google Keep's notetaking functionality using React.js (and my first app  built with React Hooks).  The project was bootstrapped with Create-React-App</p>
              <CardActions align="center">
                <Button size="small" color="primary" href={project.projectLink} target="_blank">
                  View Project
                </Button>
                <Button size="small" color="primary" href={project.sourceCode} target="_blank">
                  Source Code
                </Button>
              </CardActions>
            </div>
          </Grid>

        );
      })}
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
      </Grid>
    </Container>
  );
}
