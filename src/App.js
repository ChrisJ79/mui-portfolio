
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header/header';
import Tools from './components/tools/tools';
import FeaturedProject from './components/featuredProject/featuredProject';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import './App.scss';


export default function App() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <Tools />
        <FeaturedProject />
        <Projects />
        <Footer />
      </div>
    )
}
