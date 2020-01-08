import React, {Component} from 'react';
import './App.css';
import GoogleSignIn from './auth.js';
import LoginControl from './LogIn.js';
import Album from './Album.js';
import ButtonAppBar from './components/header.js';
import './flickr_call.js';
import {Layout, Header, Navigation, Drawer,Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
import {Link} from 'react-router-dom';
import Layout_comp from './components/layout';
import {Switch, Route} from 'react-router-dom';
import Flickr from './components/flickr.js';
import Contact from './components/contact.js'
import LandingPage from './components/Landingpage';
import Resume from './components/resume.js';
import AboutMe from './components/aboutme.js';
import Projects from './components/projects.js';


function App() {
  return (

            <Layout_comp>
              <Switch>
                <Route exact path= "/" component = {LandingPage} />
                <Route path= "/aboutme" component = {AboutMe} />
                <Route path= "/contact" component = {Contact} />
                <Route path= "/resume" component = {Resume} />
                <Route path= "/projects" component = {Projects} />
                <Route path= "/flickr" component = {Flickr} />
              </Switch>
            </Layout_comp>
  );
} export default App;
