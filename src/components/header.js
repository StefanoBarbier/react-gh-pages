import React from 'react';
import {Link} from 'react-router-dom';
import {Header, Navigation, Drawer} from 'react-mdl';

export default class Header_comp extends React.Component{
  render(){
    return (
    <div>
        <Header transparent title="Stefano Barbier" style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/flickr">Photography</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
    </div>
    )
  }
}