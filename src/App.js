
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
import './App.css';


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
    height: '0'
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
          "img": "./react-scoreboard-thumbnail.png",
          "projectTitle": "React Scoreboard",
          "techUsed": "React.js / JavaScript",
          "projectLink": "https://chrisj79.github.io/react-scoreboard",
          "sourceCode": "https://github.com/ChrisJ79/react-scoreboard",
          "key": "1"
        },
        {
          "img": "./react-noteboard-thumbnail.png",
          "projectTitle": "React NNNNoteboard",
          "techUsed": "React.js / JavaScript",
          "projectLink": "http://ChrisJ79.github.io/noteboard",
          "sourceCode": "https://github.com/ChrisJ79/noteboard",
          "key": "2"
        },
        {
          "img": "./shopping-list-thumbnail.png",
          "projectTitle": "Shopping List",
          "techUsed": "jQuery / JavaScript / Bootstrap / CSS ",
          "projectLink": "http://chrisj79.github.io/shopping-list/main.html",
          "sourceCode": "https://github.com/ChrisJ79/shopping-list",
          "key": "3"
        },
        {
          "img": "./giphy-api-thumbnail__1150x646.png",
          "projectTitle": "Giphy API",
          "techUsed": "jQuery / JavaScript / UI Kit / CSS",
          "projectLink": "http://chrisj79.github.io/API-HACK/main.html",
          "sourceCode": "https://github.com/ChrisJ79/API-HACK",
          "key": "4"
        },
        {
          "img": "./zurich-quiz-app-thumbnail.png",
          "projectTitle": "Quiz App",
          "techUsed": "jQuery / JavaScript / CSS / HTML",
          "projectLink": "http://chrisj79.github.io/quiz-app/final.html",
          "sourceCode": "https://github.com/ChrisJ79/quiz-app",
          "key": "5"          
        },
        {
          "img": "./coming-soon.png",
          "projectTitle": "RSVP App",
          "techUsed": "React.js / JavaScript",
          "projectLink": "",
          "sourceCode": "",
          "key": "6"          
        }        
    ];
    return (

  <div>
        {/* AppBar */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Container maxWidth="sm" align="center">

          <Typography variant="h6" color="inherit" noWrap className="toolIconContainer">
            Made with <br /><img src="/react_no_bg__56x50.png" className="toolIcon"  alt=""/> React.js & <br /><img src="/material-ui__62x50.png" className="toolIcon" alt=""/> Material UI
          </Typography> 

          {/* <Typography variant="h6" color="inherit" noWrap className="toolIconContainer">
            Made with <br />
          </Typography>
                    <Typography variant="h6" color="inherit" noWrap className="toolIconContainer">
            <img src="/react_no_bg__56x50.png" className="toolIcon"  alt=""/> React.js & <br />
          </Typography>
                    <Typography variant="h6" color="inherit" noWrap className="toolIconContainer">
            <img src="/material-ui__62x50.png" className="toolIcon" alt=""/> Material UI
          </Typography> */}



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
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
        {projects.map((project, index) => {
          return (
              <Grid item key={project.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia>
                    <img className="imgHeight" src={project.img} alt=""/>
                  </CardMedia>
                  <CardContent align="center">
                    <Typography gutterBottom variant="h5" component="h2">{project.projectTitle}</Typography>
                    <p>{project.techUsed}</p>
                  </CardContent> 
                  <CardActions align="center">
                    <Button size="small" color="primary" href={project.projectLink} target="_blank">
                      View Project
                    </Button>
                    <Button size="small" color="primary" href={project.sourceCode} target="_blank">
                      Source Code
                    </Button>
                  </CardActions>                  
                </Card>
              </Grid>
            );
         })}               
            </Grid>
          </Container>     
        {/* End Project Unit */}      


        {/* WP Sites Link Unit */} 
          <Container className={classes.cardGrid} maxWidth="sm" align="center">
          <img src="/wordpress_logo__240w.png" alt="" />
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Click below to see some WordPress sites that I've built over the years.
          </Typography>
            <Button variant="contained" size="large" color="primary" href="http://cjportfolio.flywheelsites.com/" target="_blank">
              View
            </Button>
          </Container>


        {/* End WP Sites Link Unit */}      

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <img src="/github-icon__50x50.png" alt="" />
        </Typography>
      </footer>
      {/* End footer */}

  </div>    
    )
}







