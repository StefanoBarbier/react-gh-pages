import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../App.css';

class AboutMe extends Component {
	render(){
		return(
			<div style={{height: '1000px', position: 'relative'}}>
				<h1 align = "center" style={{color: 'white'}}> About Me</h1>

				<form class = "inputform" align = "center" >

					<section class="location-section">
					  <h3>Introduction</h3>
					    <p>I am a recent college grad working at Wayfair in Boston as a Website Data Analyst. </p>
					    <p>I love the internet, technology, and building things.</p>
					</section>

					<section class="location-section">
					    <h3>Where I'm From</h3>
					    <p>I'm originally from Caracas Venezuela. When I was 5 years old my family moved to Boston, Massachusetts where I lived up until the end of highschool.
					     I went to Cornell University in New York state, and then moved back to Boston for work after school.  </p>
					</section>

					<section class="location-section">
				    	<h3>What are my favorite hobbies?</h3>
				    		<p> The most recent hobby I've gotten into is kitesurfing. This is just like wakeboarding or surfing, but you're attached to a giant kite that pulls 
				    		you through the air. My favorite places nearby to kite are Fogland Beach in Rhode Island and Duxubury Harbor in Duxbury, MA. I also enjoy photography
				    		and film making (see my Youtube and Instagram pages!).</p>
					</section>
			
				</form>
			</div>
			)
	}
}

export default AboutMe;