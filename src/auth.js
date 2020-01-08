import React from 'react';


const GOOGLE_BUTTON_ID = 'google-sign-in-button';

class GoogleSignIn extends React.Component {
  componentDidMount() {
    window.gapi.signin2.render(
      GOOGLE_BUTTON_ID,
      {
        width: 240,
        height: 50,
        longtitle: true,
        theme: 'dark',
        onsuccess: this.onSuccess,
      },
    );
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Name: " + profile.getName());
  }


  render() {
    return (
    	<React.Fragment>
      <div id={GOOGLE_BUTTON_ID}></div>
      </React.Fragment>
    );
  }
}

export default GoogleSignIn;
