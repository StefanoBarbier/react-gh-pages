import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../App.css';

class Contact extends Component {
	render(){
		return(
			<div style={{height: '1000px', position: 'relative'}}>
				<h1 align = "center" style={{color: 'white'}}> Contact Me</h1>
				<form class = "inputform" align = "center" action="https://formspree.io/moqjaqwv" method="POST">
				  <label class = "contact_form" for="fname">Full Name</label>
				    <input type="text" id="fname" name="name" placeholder="Your full name.." />

					<label class = "contact_form" for="email">Email Address</label>
				    <input type="email"  id="fname" name="_replyto" placeholder="Your email.."/>

				    <label class = "contact_form" for="subject">Subject</label>
				    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
				    <input type="submit" value="Submit"/>

				</form>
			</div>
			)
	}
}
export default Contact;