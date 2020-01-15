
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'   
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));




export default function Album() {
    const classes = useStyles();

  


    const projects = [
        {
          "image": "/zurich-quiz-app-thumbnail.png",
          "projectTitle": "App Name #1",
          "techUsed": "React.js / JavaScript / Material UI",
          "key": ""
        },
        {
          "image": "../logo512.png",
          "projectTitle": "App Name #2",
          "techUsed": "React.js / JavaScript / Material UI",
          "key": ""
        },
        {
          "image": "",
          "projectTitle": "App Name #3",
          "techUsed": "React.js / JavaScript / Material UI",
          "key": ""
        },
        {
          "image": "",
          "projectTitle": "App Name #4",
          "techUsed": "React.js / JavaScript / Material UI",
          "key": ""
        },
        {
          "image": "",
          "projectTitle": "App Name #5",
          "techUsed": "React.js / JavaScript / Material UI",
          "key": ""
        },
        {
          "image": "",
          "projectTitle": "App Name #6",
          "techUsed": "React.js / JavaScript / Material UI",
          "key": ""
        }        
    ];
    return (

  <div>
        {/* AppBar */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Container maxWidth="sm" align="center">
          <Typography variant="h6" color="inherit" noWrap>
            Made with React.js and Material UI
          </Typography>
        </Container>  
        </Toolbar>
      </AppBar>
      <main>
      {/* End Appbar */}


        {/* Hero unit */}
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
                  <Button variant="contained" color="primary">
                    Resume
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End hero unit */}


 
        {/* Project unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
        {projects.map((project, index) => {
          return (
              <Grid item key={projects.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    title="Image of app"
                    image={projects.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{project.projectTitle}</Typography>
                    <p>{project.techUsed}</p>
                    <hr/>
                  </CardContent> 
                  <CardActions align="center">
                    <Button size="small" color="primary">
                      View Project
                    </Button>
                    <Button size="small" color="primary">
                      Source Code
                    </Button>
                  </CardActions>                  
                </Card>
              </Grid>
            );
         })}               
            </Grid>
          </Container>     
        {/* End hero unit */}            

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}

  </div>    
    )
}







