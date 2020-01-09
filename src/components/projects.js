import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Tab, Tabs, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl'

const CustomGrid = (props) => (
    <Card shadow={5} style={{minWidth: '450', width: '800px', margin: 'auto'}}>
        <CardTitle style= {{color: '#fff', height: '400px', background: `url(${props.backgroundImage}) center / cover`}} >
            {props.name}
        </CardTitle>
        <CardText>
            {props.text}
        </CardText>
        <CardActions border>
            <Button colored href={props.addressGithub} target="_blank">GitHub</Button>
            <Button colored href={props.addressDemo} target="_blank">Demo</Button>
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
                            addressGithub = "https://github.com/StefanoBarbier/LogIn"
                            addressDemo = "https://youtu.be/EslzZAzOhTk"
                        />
                    </div>
                    );
            //Weather App
            case 2:
                return (
                    <div className="projects-grid">
                        <CustomGrid 
                            //all the custom info for the card
                            backgroundImage = "https://live.staticflickr.com/65535/49351211962_19f6c50f93_o.png"
                            name="Weather App" 
                            text = "This app connects to the openweathermap.org API to get weather information for a particular location. Users can input the city and
                            country and then get the returned current weather. The website is built as a ReactJS application."
                            addressGithub = "https://github.com/StefanoBarbier/weatherapp"
                            addressDemo = "https://youtu.be/t1Fn5fQ9t0k"
                        />
                    </div>
                    );            
            //Java NeoPixel Project
            case 3:
                return (
                    <div className="projects-grid">
                        <CustomGrid 
                            //all the custom info for the card
                            backgroundImage = "https://live.staticflickr.com/65535/49353391668_eab4c6dfe0_o.png"
                            name="Java NeoPixel Project" 
                            text = "A   one meter   long    strip   of  60  neo-pixels  is  connected   to  an  Arduino Uno and a   
                                    portable    battery to  recreate    images  with    a   long    exposure    camera. Images  can either  
                                    be  downloaded  online  or  created in  Adobe   Photoshop.  Images  are compressed  to  60  
                                    pixels  high,   while   maintaining proportional    horizontal  dimensions, and exported    as
                                    a   JPEG.   This    JPEG    is  read    in  a   Java    program (written    in  Eclipse Neon),  which   exports 
                                    a   text    file    with    each    pixel’s color   as  one element in  a   long    list.   Each    pixel   in  the JPEG    
                                    image   is  converted   to  its’    binary  RGB representation  and then    color   mapped  to  the 
                                    rainbow colors (ROYGBIV).   The outputted   list    is  copy    and pasted  into    an  Arduino 
                                    IDE script  and saved   in  flash   memory. The script  reads   the list    in  60  element chunks  
                                    and flashes them    to  the LED stick.  A   camera  on  a   tripod  is  set up  with    an  exposure    
                                    time    of  around  ten seconds.    A   user    walks   across  the frame   while   holding up  the LED 
                                    stick   during  the duration    of  the exposure.   "
                            addressGithub = "https://people.ece.cornell.edu/land/courses/eceprojectsland/STUDENTPROJ/2016to2017/sab338/LED_Light_Stick.pdf"
                            addressDemo = "https://people.ece.cornell.edu/land/courses/eceprojectsland/STUDENTPROJ/2016to2017/sab338/LED_Light_Stick.pdf"
                        />
                    </div>
                    );
            //Google Authentication
            case 4:
                return (
                    <div className="projects-grid">
                        <CustomGrid 
                            //all the custom info for the card
                            backgroundImage = "https://live.staticflickr.com/65535/49353979871_d4d4d28c65_o.png"
                            name="Google Authentication" 
                            text = "This is currently a work in progress. I am working on including Google OAuth 2.0 into the Portfolio Website that will 
                            allow people to log in with their google accounts and access my resume if I give them permissions. Currently I have connected to the API
                            and can log people in, but have not yet taken the crededential information and used it to dynamically display content. The files exist inside the 
                            Portfolio site repository."
                            addressGithub = "https://github.com/StefanoBarbier/react-gh-pages"
                            addressDemo = "https://github.com/StefanoBarbier/react-gh-pages"
                        />
                    </div>
                    );
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
                    <Tab style={{color: 'white'}}>Weather App</Tab>
                    <Tab style={{color: 'white'}}>Pixel Mapping Long Exposure</Tab>
                    <Tab style={{color: 'white'}}>Google Authentication</Tab>
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

