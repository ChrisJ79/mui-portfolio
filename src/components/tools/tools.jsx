import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import '../../App.scss';

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }
}));

export default function Tools() {
  const classes = useStyles();
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
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4} className="flexGrid">
      {tools.map((tool, index) => {
      return (
          <Grid item key={tool.key} xs={6} sm={4} md={1} align="center">
                <img className="tool" src={tool.img} alt=""/>
                <Typography gutterBottom variant="p" component="p">{tool.title}</Typography>
          </Grid>
        );
      })}
      </Grid>
    </Container>
  )
}
