import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Tab, Tabs, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl'

const CustomGrid = (props) => (
    <Card shadow={5} style={{minWidth: '450', width: '600px', margin: 'auto'}}>
        <CardTitle style= {{color: '#fff', height: '300px', background: `url(${props.backgroundImage}) center / cover`}} >
            {props.name}
        </CardTitle>
        <CardText>
            {props.text}
        </CardText>
        <CardActions border>
            <Button colored href={props.addressGithub} target="_blank">GitHub</Button>
            <Button colored href={props.addressDemo} target="_blank">Youtube Demo</Button>
        </CardActions>

    </Card>
);


class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    //toggle between the different projects
    toggleCategories() {
        switch(this.state.activeTab) {
            //Portfolio Project
            case 0:
                return (
                    <div className="projects-grid">
                        <CustomGrid 
                            //all the custom info for the card
                            backgroundImage = "https://live.staticflickr.com/65535/49350525823_253d3f8e80_o.png"
                            name="Portfolio Site" 
                            text = "This is a basic react app site build with React.js, Javascript, HTML, and CSS. The site is hosted on GitHubPages"
                            addressGithub = "https://github.com/StefanoBarbier/react-gh-pages"
                            addressDemo = "https://www.youtube.com/watch?v=0TFEyT5wkX0"
                        />
                    </div>
                    );

            //Login Project
            case 1:
                return (
                    <div className="projects-grid">
                        <CustomGrid 
                            //all the custom info for the card
                            backgroundImage = "https://live.staticflickr.com/65535/49351267902_aa9fe469f1_o.png"
                            name="Login System" 
                            text = "This site is a simple user registration and login system using PHP, MySQL and basic CSS styling. The system protects the passwords
                            with hashed inputs to the DB as well as protects aginst SQL injection with parameterized statements. Users can create accounts, log in to access
                            the internal site, then log out."
                            img_src = ""
                            addressGithub = "https://github.com/StefanoBarbier/LogIn"
                            addressDemo = "https://www.youtube.com"
                        />
                    </div>
                    );
            case 2:
                return (<div className="projects-grid"><CustomGrid name="TBD"/></div>);
            default:
                return (<div className="projects-grid"><CustomGrid name="TBD"/></div>);
        }
    }

    render() {
        return (
            <div style={{height: '1900px', position: 'relative'}}>
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color: 'white'}}>Portfolio Site</Tab>
                    <Tab style={{color: 'white'}}>Login System</Tab>
                    <Tab style={{color: 'white'}}>Google Authentication</Tab>
                    <Tab style={{color: 'white'}}>Weather App</Tab>
                </Tabs>
                <section className="projecs-grid">
                    {this.toggleCategories()}
                </section>
            </div>
            </div>
        );
    }
}

export default Projects;

