
import React from 'react';
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

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Container maxWidth="sm">
          <Typography variant="h6" color="inherit" align="center" noWrap>
              Made with React and Material UI
          </Typography>
        </Container>  
        </Toolbar>
      </AppBar>
      <main>

        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Chris Johnson
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Front End Web Developer.<br />
              React Enthusiast.<br />
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

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
{cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>

                <Card className={classes.card[0]}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/zurich-quiz-app-thumbnail.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      App #1
                    </Typography>
                    <Typography>
                      JavaScript, React, Material UI
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Project
                    </Button>
                    <Button size="small" color="primary">
                      Source Code
                    </Button>
                  </CardActions>
                </Card>

                <Card className={classes.card[1]}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/react-noteboard-thumbnail.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      App #2
                    </Typography>
                    <Typography>
                      JavaScript, React, Material UI
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Project
                    </Button>
                    <Button size="small" color="primary">
                      Source Code
                    </Button>
                  </CardActions>
                </Card>

                <Card className={classes.card[2]}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/logo512.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      App #3
                    </Typography>
                    <Typography>
                      JavaScript, React, Material UI
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Project
                    </Button>
                    <Button size="small" color="primary">
                      Source Code
                    </Button>
                  </CardActions>
                </Card>

                <Card className={classes.card[3]}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/giphy-api-thumbnail.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      App #4
                    </Typography>
                    <Typography>
                      JavaScript, React, Material UI
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Project
                    </Button>
                    <Button size="small" color="primary">
                      Source Code
                    </Button>
                  </CardActions>
                </Card>                                


              </Grid>
))}
          </Grid>
        </Container>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Github Logo
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}