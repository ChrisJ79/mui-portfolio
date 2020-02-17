import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import '../../App.scss';



const useStyles = makeStyles(theme => ({
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
  }
}));

export default function FeaturedProject() {
  const classes = useStyles();
  const featuredProject = [
    {
      "projectLink": "https://chrisj79.github.io/ecommerce-store",
      "sourceCode": "https://github.com/ChrisJ79/ecommerce-store",
      "key": "1"
    }
  ];
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container component="main" className={classes.root}>
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
  );
}
