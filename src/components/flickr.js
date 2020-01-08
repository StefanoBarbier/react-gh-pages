import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import loadJquery from '../flickr_call.js';


export default class Flickr extends React.Component {
  render() {
    loadJquery();
    return (
      <React.Fragment>
      <div style={{height: '1900px', position: 'relative'}}>
          <h1 align = "center" style={{color: 'white'}}> Flickr Image Gallery</h1>
            <div id = "gallery" />
        </div>
      </React.Fragment>
    )
  }
}



