
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

import Header from './components/header/header'
import Tools from './components/tools/tools'

import './App.css';

import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';


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
  root: {
  // height: '100vh',
},
image: {
  backgroundImage: 'url(https://source.unsplash.com/random)',
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
},
avatar: {
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
},
form: {
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1),
},
submit: {
  margin: theme.spacing(3, 0, 2),
},
}));




export default function Album() {
    const classes = useStyles();
    const featuredProject = [
      {
        "projectLink": "https://chrisj79.github.io/ecommerce-store",
        "sourceCode": "https://github.com/ChrisJ79/ecommerce-store",
        "key": "1"
      }
    ];
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





    return (

      <div>
        <Header />
        <Tools />

      {/* Featured Project Section */}
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container component="main" className={classes.root}>
          <CssBaseline />

          {featuredProject.map((project, index) => {
            return (
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <h1>Featured Project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus eget nunc.</p><p>Quis risus sed vulputate odio ut enim blandit volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Risus nullam eget felis eget. Ultrices neque ornare aenean euismod elementum. Ultricies tristique nulla aliquet enim tortor. Adipiscing elit duis tristique sollicitudin nibh sit. Vitae congue eu consequat ac felis donec et.</p><p> Malesuada nunc vel risus commodo viverra. Enim nunc faucibus a pellentesque sit. Pellentesque massa placerat duis ultricies lacus sed. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Ut sem viverra aliquet eget sit amet tellus cras.</p>
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

      {/* End - Featured Project Section */}


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
