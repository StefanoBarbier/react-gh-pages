import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import LoginControl from '../LogIn.js';

class Resume extends Component {
	render(){
		return(
			<React.Fragment>

				<div style={{height: '1000px', position: 'relative'}}>
					<h1 align = "center" style={{color: 'white'}}> Resume Page</h1>

					<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg) center / cover'}}>Welcome</CardTitle>
					    <CardText>
					        Log In!
					    </CardText>
					    <CardActions border>
					        <LoginControl />
					    </CardActions>
					</Card>
				</div>

			</React.Fragment>

			)

	}
}

export default Resume;