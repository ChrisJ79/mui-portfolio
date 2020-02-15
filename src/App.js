
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
          "img": "./multistep-form-thumbnail.png",
          "projectTitle": "React Multi-Step Form",
          "techUsed": "React.js / JavaScript / Material UI",
          "projectLink": "https://chrisj79.github.io/step-form-app/",
          "sourceCode": "https://github.com/ChrisJ79/step-form-app",
          "key": "1"
        },
        {
          "img": "./react-scoreboard-thumbnail-1.png",
          "projectTitle": "React Scoreboard",
          "techUsed": "React.js / JavaScript",
          "projectLink": "https://chrisj79.github.io/react-scoreboard",
          "sourceCode": "https://github.com/ChrisJ79/react-scoreboard",
          "key": "2"
        },
        {
          "img": "./react-noteboard-thumbnail.png",
          "projectTitle": "React Noteboard",
          "techUsed": "React.js / JavaScript",
          "projectLink": "http://ChrisJ79.github.io/noteboard",
          "sourceCode": "https://github.com/ChrisJ79/noteboard",
          "key": "3"
        },
        {
          "img": "./shopping-list-thumbnail.png",
          "projectTitle": "Shopping List",
          "techUsed": "jQuery / JavaScript / Bootstrap / CSS ",
          "projectLink": "http://chrisj79.github.io/shopping-list/main.html",
          "sourceCode": "https://github.com/ChrisJ79/shopping-list",
          "key": "4"
        },
        {
          "img": "./giphy-api-thumbnail__1150x646.png",
          "projectTitle": "Giphy API",
          "techUsed": "jQuery / JavaScript / UI Kit / CSS",
          "projectLink": "http://chrisj79.github.io/API-HACK/main.html",
          "sourceCode": "https://github.com/ChrisJ79/API-HACK",
          "key": "5"
        },
        {
          "img": "./zurich-quiz-app-thumbnail.png",
          "projectTitle": "Quiz App",
          "techUsed": "jQuery / JavaScript / CSS / HTML",
          "projectLink": "http://chrisj79.github.io/quiz-app/final.html",
          "sourceCode": "https://github.com/ChrisJ79/quiz-app",
          "key": "6"
        }
    ];

    const tools = [
        {
          "img": "./react.svg",
          "title": "React.js",
          "key": "1"
        },
        {
          "img": "./react-router.svg",
          "title": "React Router",
          "key": "2"
        },
        {
          "img": "./redux.svg",
          "title": "Redux",
          "key": "3"
        },
        {
          "img": "./firebase-1.svg",
          "title": "Firebase",
          "key": "4"
        },
        {
          "img": "./bootstrap-4.svg",
          "title": "Bootstrap",
          "key": "5"
        },
        {
          "img": "./material-ui.svg",
          "title": "Material UI",
          "key": "6"
        },
        {
          "img": "./uikit.svg",
          "title": "UIKit",
          "key": "7"
        },
        {
          "img": "./vue-9.svg",
          "title": "Vue.js",
          "key": "8"
        },
    ];




    return (

      <div>

      {/* Header Section */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Container maxWidth="sm" align="center">
          <Typography variant="h6" color="inherit" noWrap className="toolIconContainer">
            Made with <br /><img src="./react_no_bg__56x50.png" className="toolIcon"  alt=""/> React.js & <br /><img src="./material-ui__62x50.png" className="toolIcon" alt=""/> Material UI
          </Typography>
        </Container>
        </Toolbar>
      </AppBar>



      {/* hero */}
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
      {/* End Header Section */}


      {/* Tools  */}
      <Container className={classes.cardGrid} maxWidth="sm">
        <Grid container spacing={4}>
      {tools.map((tool, index) => {
        return (
            <Grid item key={tool.key} xs={6} sm={4} md={3} align="center">
              {/* <Card className={classes.card}> */}
                  <img className="tool" src={tool.img} alt=""/>
                {/* <CardContent align="center"> */}
                  <Typography gutterBottom variant="p" component="p">{tool.title}</Typography>
                {/* </CardContent> */}
              {/* </Card> */}
            </Grid>
          );
        })}
        </Grid>
      </Container>
      {/* End Tools  */}



      {/* Project Section */}
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


        {/* WP Sites */}
        <Container className={classes.cardGrid} maxWidth="sm" align="center">
        <img src="./wordpress_logo__240w.png" alt="" />
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Click below to see some WordPress sites that I've built over the years.
        </Typography>
          <Button variant="contained" size="large" color="primary" href="https://cjportfolio.flywheelsites.com/" target="_blank">
            View
          </Button>
        </Container>
        {/* End Project Section */}


        {/* Footer Section  */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
          <Button href="https://github.com/ChrisJ79" target="_blank" color="primary">
            <img src="./github-icon__50x50.png" alt="" />
          </Button>
          </Typography>
        </footer>
        {/* End Footer Section */}

      </div>
    )
}
