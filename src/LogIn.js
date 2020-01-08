import React from 'react';
import ReactDOM from 'react-dom';
import GoogleSignIn from './auth.js';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  
  /*
componentDidMount(props){
	if (this.state.isLoggedIn) {
    } else {
      window.gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
}

componentDidMount(props){
	if (this.state.isLoggedIn) {
    } else {
      renderGoogleLogIn();
    }
}
*/

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    signOut();
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      		button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
    	<React.Fragment>
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
  
      </React.Fragment>
    );
  }
} export default LoginControl;


function LoginButton(props) {
  return (
  	/*
    <button onClick={props.onClick}>
      Login
    </button>e
    */
    <div className="g-signin2" onClick={props.onClick}></div>
    
  );
}


function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

  function signOut() {
  	renderGoogleLogIn()
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
      return true;
    }
function onFailure(error) {
      console.log(error);
      return false;
    }

function renderGoogleLogIn(){
	window.gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
}



