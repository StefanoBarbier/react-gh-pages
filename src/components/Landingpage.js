import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../App.css';

class Landing extends Component {
	render(){
		return(
			<div style = {{width: '50%', margin: 'auto'}}>
						<div className = "banner-txt">
							<h1 >Aspiring Web Developer</h1> 
							<p> HTML/CSS | Javascript | React | PhP | MySQL | Python </p>
							<div className = "social-links">

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/stefanobarbier/" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-linkedin-square" aria-hidden = "true" />
								</a>

								{/* GitHub */}
								<a href="https://github.com/StefanoBarbier" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-github-square" aria-hidden = "true" />
								</a>

								{/* Instagram */}
								<a href="https://www.instagram.com/swiftmozart/" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-instagram" aria-hidden = "true" />
								</a>

								{/* Youtube */}
								<a href="https://www.youtube.com/channel/UCNrLxVt3ajBbd7zbAZuIuuA?view_as=subscriber" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-youtube-square" aria-hidden = "true" />
								</a>

							</div>
						</div>

			</div>
			)

	}
}

export default Landing;